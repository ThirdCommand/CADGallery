json.project do
  json.extract! @project, :id, :title, :description, :user_id
end

if @project.pictures
  json.pictures do
    json.array! @project.pictures do |picture|
      json.extract! picture, :id, :img_url
      # json.extract! picture, :id, :img_url
    end
  end
end


json.user do 
  json.extract! @project.user, :id, :first_name, :last_name
end