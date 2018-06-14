@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description
    if project.pictures[0]
      json.imageUrl project.pictures[0].img_url # first picture uploaded is the title one
    end
    json.ownerImage project.user.img_url
  end 
end


