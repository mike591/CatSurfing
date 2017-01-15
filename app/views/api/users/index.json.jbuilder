@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.status user.status
    json.address user.address
    json.city user.city
    json.state user.state
  end
end
