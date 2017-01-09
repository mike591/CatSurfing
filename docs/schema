# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
address         | string    | not null
city            | string    | not null
state           | string    | not null
zip             | integer   | not null
status          | string    | not null
age             | integer   | null
sex             | string    | null
profile         | text      | null

## cats
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null
name        | string    | not null
description | string    | not null


## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cat_id      | integer   | not null, foreign key (references cats), indexed
host_id     | integer   | not null, foreign key (references users), indexed
start       | date      | not null
end         | date      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
host_id     | integer   | not null, foreign key (references users), indexed
rating      | integer   | not null
review      | text      | not null
