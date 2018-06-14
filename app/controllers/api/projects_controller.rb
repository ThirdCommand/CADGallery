class Api::ProjectsController < ApplicationController
  ActionController::Parameters.permit_all_parameters = true
  def index
    @projects = Project.all
  end

  def show 
    @project = Project.find(params[:id])
  end 

  def create 


    @project = Project.new(params[:raw_project][:project])
  
    if @project.save
      project_id = @project.id
      img_urls = params[:raw_project][:pictures]
    
      if Api::PicturesController.create_pictures(project_id, img_urls)
        render :show
      else 
        render json: ["pictures error"], status: 422
      end
    
     
    else 
      render json: @projects.errors.full_messages, status: 422
    end 
  end

  def destroy 
    @project = Project.find(params[:d])
    @project.delete 
    render "api/projects/index"
  end

  private

  def project_params
  end

end