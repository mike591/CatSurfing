@cats.each do |cat|
  json.set! cat.id do
    json.id cat.id
    json.user_id cat.user_id
    json.name cat.name
    json.description cat.description
  end
end
