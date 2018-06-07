# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  img_url         :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :email, :img_url, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token, :ensure_image_url

  #users have many projects, and have many likes and comments through projects
  # has_many :projects
  # has_many :likes
  #   through: projects
  # has_many :comments
  #   through: projects
  
  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil 
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlSafe_base64
    self.save!
    self.session_token
  end

  def ensure_image_url
    #randomize pictures interpolate
    self.image_url ||= '../assets/images/guest'
    self.save! 
    self.image_url
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlSafe_base64
  end
  
  
end
