json.project do
  json.extract! @project, :id, :title, :description
end

json.pictures do
  @project.pictures.each do |picture|
    json.set! picture.id do
      json.extract! picture, :id, :img_url
    end
  end
end