class Review < ApplicationRecord
  validate :already_reviewed

  belongs_to :user

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: "User"

  def already_reviewed
    reviews = Review.where(host_id: self.host_id)
    unless reviews.nil?
      reviews.each do |rev|
        errors.add(:user_id, "Already reviewed the host") if rev.user_id == self.user_id
      end
    end
  end
end
