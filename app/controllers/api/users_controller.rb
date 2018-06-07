class Api::UsersController < ApplicationController
  def create 
    @user = User.new(user_params)
    if @user.save
      login(@user)
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  #new method only needed for a seperate page
  #not needed anymore. passed @user down to the page
  

  def destroy 
    @user = User.findby(session_token: session[:session_token])
    @user.delete
  end

private
  def user_params
    params.require(:user).permit(:password, :username)
  end

end
