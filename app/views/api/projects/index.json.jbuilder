@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description
    json.imageUrl image_path(project.pictures[0].img_url) # first picture uploaded is the title one
    json.ownerImage image_path(project.user.img_url)
  end
end


