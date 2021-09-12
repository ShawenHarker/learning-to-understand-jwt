CREATE TABLE users (
    id     uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name      varchar(250) NOT NULL,
    email     varchar(250) NOT NULL,
    password   varchar(250) NOT NULL
);

-- Inserting fake users
INSERT INTO users (full_name, email, password) VALUES ('Henry Fake', 'fakehenry@yahoo.com', '1234');


-- Select endpoints
SELECT * FROM users;