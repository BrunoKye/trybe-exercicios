USE sakila;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, `password`)
VALUES ('Carl', 'Jacob', 5, 'Carl.Jacob@sakilastaff.com', 1, 0, 'Carl', '123test123');

USE sakila;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, `password`) VALUES 
('Charles', 'Rog', 6, 'Charles.Rog@sakilastaff.com', 2, 0, 'Charles', 'test123test'),
('Gabriel', 'Phylip', 7, 'Gabriel.Phylip@sakilastaff.com', 1, 1, 'Gabriel', 't1e2s3t');

USE sakila;
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

USE sakila;
INSERT INTO category (`name`)
VALUES ('Slice of Life'), ('Isekai'), ('School');

USE sakila;
INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);