DROP DATABASE IF EXISTS favorites;
CREATE DATABASE favorites;

\c favorites;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  user_id INTEGER REFERENCES user(id)
);

INSERT INTO users (name, password)
  VALUES 
    ('admin', 'password'),
    ('test2', 'password2');

INSERT INTO restaurants (name, fav_rest)
  VALUES
    ('admin', 'lobster shack'),
    ('test2', 'vending machine');



