# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Guest", password: "password", email: "guest@gmail.com", address: "160 Spear St.", city: "San Francisco", state: "CA", zip: "94105", status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")
User.create(username: Faker::Internet.user_name, password: Faker::Internet.password(10, 20), email: Faker::Internet.email, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip, status: "Maybe")



Cat.create(user_id: 1, name: Faker::Cat.name, description: Faker::Cat.breed )
Cat.create(user_id: 1, name: Faker::Cat.name, description: Faker::Cat.breed )
Cat.create(user_id: 1, name: Faker::Cat.name, description: Faker::Cat.breed )
Cat.create(user_id: 1, name: Faker::Cat.name, description: Faker::Cat.breed )
