 class Api::UsersController < ApplicationController
  def create 
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  #new method only needed for a seperate page
  #not needed anymore. passed @user down to the page
  

  def destroy 
    @user = User.find_by_session_token(session[:session_token])
    @user.delete
  end

private
  def user_params
    params.require(:user).permit(:password, :email, :first_name, :last_name)
  end

end
