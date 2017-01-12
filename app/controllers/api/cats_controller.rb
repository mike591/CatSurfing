class Api::CatsController < ApplicationController
  def create
    @cat = Cat.new(cat_params)
    @cat.user_id = current_user.id
    if @cat.save
      render :show
    else
      render json: @cat.errors.full_messages, status: 422
    end
  end

  def update
    @cat = Cat.find_by(id: params[:id])
    if @cat.update(cat_params)
      render :show
    else
      render json: @cat.errors.full_messages, status: 422
    end
  end

  def destroy
    @cat = Cat.find(params[:id])
    @cat.destroy
    render :show
  end

  private

  def cat_params
    params.require(:cat).permit(:name, :description)
  end
end
