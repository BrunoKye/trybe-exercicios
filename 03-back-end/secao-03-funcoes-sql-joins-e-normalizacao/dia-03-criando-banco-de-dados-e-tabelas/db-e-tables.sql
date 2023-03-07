DROP SCHEMA IF EXISTS zoo;
CREATE SCHEMA zoo;
USE zoo;

CREATE TABLE animal(
	animal_id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    specie VARCHAR(50) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age SMALLINT NOT NULL,
    location VARCHAR(50) NOT NULL
);

CREATE TABLE manager(
	manager_id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) NOT NULL
);

CREATE TABLE caretaker(
	caretaker_id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) NOT NULL,
    manager_id SMALLINT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager (manager_id)
);

CREATE TABLE animal_caretaker(
	animal_id SMALLINT NOT NULL,
	caretaker_id SMALLINT NOT NULL,
    CONSTRAINT PRIMARY KEY (animal_id, caretaker_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
	FOREIGN KEY (caretaker_id) REFERENCES caretaker (caretaker_id)
);