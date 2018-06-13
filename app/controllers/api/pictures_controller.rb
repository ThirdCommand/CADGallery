class Api::PicturesController < ApplicationController

  def create_pictures(project_id)
    pictures_params = { project_id: project_id, img_urls: params[:raw_project][:pictures]}
    @pictures = Picture.new_pictures(pictures_params)
    if @pictures
      # go to pictures index when completed
      return @pictures
    else 
      return false
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
  def picture_urls
    params.require(:raw_project).permit(pictures: [])
  end
  def picture_params 
    params.require(:project).permit(:img_url, :project_id)
  end
end