Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} def
    resources :user, only: [:create, :new, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
