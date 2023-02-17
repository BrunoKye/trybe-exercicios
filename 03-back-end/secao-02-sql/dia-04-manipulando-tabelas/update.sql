SET SQL_SAFE_UPDATES = 0;

USE sakila;
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

USE sakila;
UPDATE category
SET `name` = 'Science Fiction'
WHERE `name` = 'Sci-fi';

USE sakila;
UPDATE film
SET rental_rate = 25
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') 
AND replacement_cost > 20;

USE sakila;
UPDATE film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 0 AND 100 THEN 10
		WHEN lenght > 100 THEN 20
	END
);