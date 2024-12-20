-- Buyers Table
CREATE TABLE buyers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    region VARCHAR(255),
    delivery_location VARCHAR(255)
);

-- Collection Centers Table
CREATE TABLE collection_centers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    contact VARCHAR(20),
    location VARCHAR(255)
);

-- Orders Table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    buyer_id INT REFERENCES buyers(id),
    quantity INT,
    quality_params TEXT,
    loading_date DATE,
    status VARCHAR(50)
);

-- Messages Table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    content TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


