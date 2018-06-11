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
  # validates :img_url, presence: true
  # belongs_to :project
end
