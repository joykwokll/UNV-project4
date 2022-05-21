CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    username TEXT,
    password TEXT,
    phone VARCHAR(8),
    email TEXT
);

INSERT INTO users (name, username, password, phone, email) VALUES ('joy', 'joyjoy', '12345', '91790875', 'joy@gmail.com') RETURNING id;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username TEXT,
--     password TEXT,
--     phone VARCHAR(8),
--     email TEXT
-- );

-- shadowDatabaseUrl = env("SHADOW_DATABASE_URL")