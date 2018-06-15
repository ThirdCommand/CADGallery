# CADGallery



CADGallery is a place for engineers to show off and discuss their 3D design portfolios. Seed content and styling are taken from Autodesk Gallery. Engineers and Architects can upload their projects and ask fellow designers questions about their projects. When supported CAD files are uploaded, users can manipulate them in 3D right in the browser. 



https://cadgallery.herokuapp.com/#/

![Alt Text](https://media.giphy.com/media/i34276WfpbJQ8HFiO1/giphy.gif)

CADGallery was built using Postgress to manage the database. Ruby on Rails is used interact with the database and handle data requests from the front end. The fontend is handled with React along with Redux to manage the server requests and display data. 

One challenge I encountered was handling the creation of projects. Users can upload images of their projects, and while they are uploading them, previews of those images are displayed. When projects are submitted, all of the needed information is sent in one dispatch to the backened and two database tables are changed. If the last picture fails a model level validation, the user needs to be given a chance to fix their projects. The metadata for the previously added pictures must be destroyed along with the project entry.

I handled this by adding a model class method for creating an array of pictures. It is called from the projects controller after creating the project. If the project is spoiled by a bad picture validation, it will delete all the previously made pictures and output false, telling the projects controller to delete the project. This mirrors the rails save method in order to mantain rails convention. 

```ruby
class Api::ProjectsController < ApplicationController
  #...
  def create 
    @project = Project.new(params[:raw_project][:project])
  
    if @project.save
      project_id = @project.id
      img_urls = params[:raw_project][:pictures]
    
      if Api::PicturesController.create_pictures(project_id, img_urls)
        render :show
      else 
        @project.delete
        render json: ["pictures error"], status: 422
      end

    else 
      render json: @project.errors.full_messages, status: 422
    end 
  end
  #...
end


class Picture < ApplicationRecord
#...
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
private
  def self.delete_pictures(pictures)
    pictures.each do |picture|
      picture.delete
    end
  end

#...
end

```
