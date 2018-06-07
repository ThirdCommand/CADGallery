class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user 
    return nil unless session[:session_token]
    @current_user ||= User.findby(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    session[:session_token] = nil
    @current_user.reset_session_token!
  end

  def logged_in?
    !!@current_user
  end
  
  #front end handles this, not sure if double protection adds anything
  def require_login
    unless current_user 
      render json: { base: ['require_login fail: app controller']}, status: 401
    end
  end

end
