# == Schema Information
#
# Table name: projects
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  validates title, description, user_id, presence: true
  hasmany :pictures
  belongs_to :user
  hasmany :comments
end
