class API::ProjectsController < ApplicationController

#   def index
#     @projects = Project.all
#   end

#   def show 
#     @project = Project.find(params[:id])
#   end 

#   def create 
#     @project = Project.new(project_params)
#     if @project.save
#       # go to projects index when completed
#       render "/api/projects"
#     else 
#       render json: @projects.errors.full_messages, status: 422
#     end
#   end

#   def destroy 
#     @project = Project.find(params[:d])
#     @project.delete 
#     render "api/projects"
#   end

# private
  
#   def project_params 
#     params.require(:project).permit(:title, :description, :user_id)
#   end
end