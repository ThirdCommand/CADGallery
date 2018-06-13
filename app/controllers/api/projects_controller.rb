class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show 
    @project = Project.find(params[:id])
  end 

  def create 
    @project = Project.new(params[:user_id,:title,:body])
    if @project.save
      render "/api/projects/#{@project.id}/show"
    else 
      render json: @projects.errors.full_messages, status: 422
    end 
  end

  def destroy 
    @project = Project.find(params[:d])
    @project.delete 
    render "api/projects/show"
  end

private
  
  def project_params 
    params.require(:pictures).permit(pictures: [])
  end
end