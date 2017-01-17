class User < ApplicationRecord
  validates :session_token, presence: true
  validates :username, uniqueness: true, presence: true
  validates :email, :address, :city, :state, :zip, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :cats

  has_many :bookings,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: "Booking"

  def self.generate_token
    SecureRandom.urlsafe_base64()
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    return @user if @user && @user.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = User.generate_token
    self.save
    self.session_token
  end

end
