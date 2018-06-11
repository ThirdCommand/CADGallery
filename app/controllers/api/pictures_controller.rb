
class API::PicturesController < ApplicationController

  def create 
    @picture = Picture.new(picture_params)
    if @picture.save
      project = @picture.project
      # go to pictures index when completed
      render json: project
    else 
      render json: @pictures.errors.full_messages, status 422
    end
  end

  def show 
    @picture = Picture.find(params[:id])
  end 

  def destroy 
    @picture = Picture.find(params[:d])
    @picture.delete 
    render "api/pictures"
  end

private
  
  def picture_params 
    params.require(:picture).permit(:img_url, :picture_id)
  end
end