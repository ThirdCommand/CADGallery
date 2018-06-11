json.project do
  json.extract! @project, :id, :title, :description, :user_id
end

if @project.pictures
  json.pictures do
    @project.pictures.each do |picture|
      json.set! picture.id do
        json.extract! picture, :id, :img_url
      end
    end
  end
end