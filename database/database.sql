CREATE DATABASE quatrix;

CREATE EXTENSION pgcrypto;

CREATE TABLE users(
    phone VARCHAR(10) NOT NULL PRIMARY KEY,
    password TEXT NOT NULL
);

INSERT INTO users(
phone,
password
) VALUES(
'0723232323',
crypt('123456', gen_salt('bf',8))
);
