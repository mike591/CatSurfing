class Api::UsersController < ApplicationController
  def index
    @users = User.where(city: params[:city]).where.not(id: current_user.id).where.not(status: 'Not Accepting Guests')
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    @user.status = 'Maybe'
    @user.profile = 'No Profile Yet' unless @user.profile
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(edit_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :address, :city, :state, :zip, :status, :age, :sex, :profile)
  end

  def edit_params
    params.require(:user).permit(:username, :email, :address, :city, :state, :zip, :status, :age, :sex, :profile)
  end
end
