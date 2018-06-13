class Api::PicturesController < ApplicationController

  def create_pictures
    @pictures = Picture.new_pictures(params.pictures)
    if @pictures
      project_id = @pictures[0].project_id
      # go to pictures index when completed
      render "/api/projects/#{project_id}"
    else 
      render json: ["invalid picture creation paramaters"], status: 422
    end
  end

  def create 
    @picture = Picture.new(picture_params)
    if @picture.save
      project = @picture.project
      # go to pictures index when completed
      render "/api/projects/#{project.id}"
    else 
      render json: @pictures.errors.full_messages, status: 422
    end
  end

  def show 
    @picture = Picture.find(params[:id])
  end 

  def destroy 
    @picture = Picture.find(params[:d])
    project = @picture.project
    @picture.delete 
    render "api/projects/#{project.id}"
  end

private
  def pictures_params
    debugger
    params.require(:pictures).permit(:project_id, :img_urls)
  end

  def picture_params 
    params.require(:picture).permit(:img_url, :project_id)
  end
end