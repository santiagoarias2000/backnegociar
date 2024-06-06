-- Crear la tabla users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE UNIQUE INDEX idx_username ON users(username);

-- Crear la tabla neighborhoods
CREATE TABLE neighborhoods (
    neighborhood_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Crear el tipo enumerado para property_type
CREATE TYPE ty_pro AS ENUM ('1', '2', '3');
-- 1=apartamento 2=casa 3=finca

-- Crear el tipo enumerado para estrato social
CREATE TYPE ty_estrato AS ENUM ('1', '2', '3', '4', '5', '6');

-- Crear el tipo enumerado para state
CREATE TYPE ty_state AS ENUM ('1', '2', '3');
-- 1=nueva 2=usada 3=renovacion

-- Crear la tabla properties con una referencia a neighborhoods y estrato social
CREATE TABLE properties (
    property_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(15, 2) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state ty_state,
    property_type ty_pro,
    neighborhood_id INTEGER REFERENCES neighborhoods (neighborhood_id) ON DELETE SET NULL,
    estrato_social ty_estrato,
    area_construida VARCHAR(100) NOT NULL,
    bannos VARCHAR(10),
    habitaciones VARCHAR(10),
    parqueadero VARCHAR(10)
);

-- Crear la tabla property_images para almacenar imágenes en Base64
CREATE TABLE property_images (
    image_id SERIAL PRIMARY KEY,
    property_id INTEGER REFERENCES properties (property_id) ON DELETE CASCADE,
    image_base64 TEXT NOT NULL,
    name_img VARCHAR(100)
);