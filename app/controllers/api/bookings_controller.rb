class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    @booking.delete
    render :show
  end

  private
  def booking_params
    params.require(:booking).permit(:cat_id, :host_id, :host_name, :start, :end)
  end
end
