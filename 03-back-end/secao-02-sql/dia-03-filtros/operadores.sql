USE sakila;
SELECT * FROM customer 
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

USE sakila;
SELECT CONCAT(first_name, ' ', last_name) as full_name FROM customer 
WHERE store_id = 2 AND active = 0 AND first_name <> 'KENNETH';

USE sakila;
SELECT title, description, release_year, rating, replacement_cost FROM film 
WHERE rating <> 'NC-17' AND replacement_cost >= 18 
ORDER BY replacement_cost DESC, title 
LIMIT 100;

USE sakila;
SELECT COUNT(*) as clientes_ativos FROM customer
WHERE store_id = 1 AND active = 1;

USE sakila;
SELECT * FROM customer
WHERE store_id = 1 AND active = 0;

USE sakila;
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;