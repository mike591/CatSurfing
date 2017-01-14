Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :cats, only: [:create, :destroy, :update, :index]
    resources :bookings, only: [:create, :destroy]
    resources :reviews, only: [:create, :update]
  end
end
