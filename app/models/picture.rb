# == Schema Information
#
# Table name: pictures
#
#  id         :bigint(8)        not null, primary key
#  img_url    :string           not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Picture < ApplicationRecord
  validates :img_url, :project_id, presence: true
  belongs_to :project

  def self.new_pictures(pictures_params)
    picture_urls = pictures_params[:img_urls]
    project_id = pictures_params[:project_id]
    new_pictures = []
    picture_urls.each do |url|
      new_picture = Picture.new({project_id: project_id, img_url: url})
    begin
      new_picture.save! 
    rescue
        Picture.delete_pictures(new_pictures)
        return false 
    end
      new_pictures.push(new_picture.dup)
    end
    return new_pictures
  end
  
  def self.delete_pictures(pictures)
    pictures.each do |picture|
      picture.delete
    end
  end
end
