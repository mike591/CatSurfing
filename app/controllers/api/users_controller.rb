class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.status = 'Maybe';
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
