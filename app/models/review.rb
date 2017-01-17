class Review < ApplicationRecord
  belongs_to :user

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: "User"
end
