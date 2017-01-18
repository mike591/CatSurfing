class Booking < ApplicationRecord
  validates :cat_id, :start, :host_id, :host_name, :owner_email, :end, presence: true
  validate :no_overlapping_bookings, :no_self_booking, :start_before_end

  belongs_to :cat

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: 'User'

  def valid_cat
    Cat.find_by(id: self.cat_id).nil?
  end

  def no_self_booking
    if valid_cat
      if self.cat.user_id == self.host_id
        errors.add(:user_id, "Cannot be the same as the host_id")
      end
    end
  end

  def no_overlapping_bookings
    bookings = Booking.where(cat_id: self.cat_id)
    if bookings
      bookings.each do |booking|
        if self.start.between?(booking.start, booking.end) || self.end.between?(booking.start, booking.end)
          errors.add(:date, "Cat already booked for those dates")
        elsif booking.start.between?(self.start, self.end) || booking.end.between?(self.start, self.end)
          errors.add(:date, ", Cat has a booking within those dates")
        end
      end
    end
  end

  def start_before_end
    if self.start > self.end
      errors.add(:start, "date cannot be after end date")
    end
  end

end
