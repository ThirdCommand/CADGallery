class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show 
    @project = Project.find(params[:id])
  end 

  def create 
    @project = Project.new(params[:raw_project][:project])
    if @project.save
      if Pictures.create_pictures(@project.id)
        render "/api/projects/#{@project.id}/show"
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
    render "api/projects/show"
  end

end