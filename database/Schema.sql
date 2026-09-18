

CREATE TABLE facilities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    capacity INTEGER NOT NULL
);


CREATE TABLE association (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    address VARCHAR(255) NOT NULL
);



CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    max_capacite INTEGER NOT NULL,
    base_price DECIMAL(10,2) NOT NULL,
    association_id INTEGER NOT NULL,
    facility_id INTEGER NOT NULL,

    FOREIGN KEY (association_id) REFERENCES association(id),
    FOREIGN KEY (facility_id) REFERENCES facilities(id)
);



CREATE TABLE familles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);



CREATE TABLE membres (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    birth_date DATE NOT NULL,
    famille_id INTEGER,

    FOREIGN KEY (famille_id) REFERENCES familles(id)
);


CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    final_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    membre_id INTEGER NOT NULL,

    FOREIGN KEY (membre_id)
        REFERENCES membres(id)
);



CREATE TABLE waiting_list (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50) NOT NULL,
    priority_score INTEGER NOT NULL
);