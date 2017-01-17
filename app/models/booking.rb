class Booking < ApplicationRecord
  validates :cat_id, :start, :host_id, :host_name, :end, presence: true
  validate :no_self_booking, :start_before_end

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
    Booking.find_by(cat_id: self.cat_id).each do |booking|
      # TODO ADD Overlapping Validations
    end
  end

  def start_before_end
    if self.start > self.end
      errors.add(:start, "date cannot be after end date")
    end
  end

end
