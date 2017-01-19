class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @user = User.find_by_id(@review.host_id)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by_id(params[:id])
    @user = User.find_by_id(@review.host_id)
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    @user = User.find_by_id(@review.host_id)
    @review.delete
    render:show
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :host_id, :rating, :review)
  end
end
