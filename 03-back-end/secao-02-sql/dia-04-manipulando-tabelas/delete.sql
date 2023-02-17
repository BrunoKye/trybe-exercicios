SET SQL_SAFE_UPDATES = 0;

USE sakila;
SELECT actor_id FROM actor
WHERE first_name = 'KARL';
DELETE FROM film_actor
WHERE actor_id = 12;
DELETE from actor
WHERE first_name = 'KARL';

USE sakila;
SELECT actor_id FROM actor
WHERE first_name = 'MATTHEW';
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);
DELETE from actor
WHERE first_name = 'MATTHEW';

USE sakila;
DELETE FROM film_text
WHERE description LIKE '%saga%';

USE sakila;
TRUNCATE film_actor;
TRUNCATE film_category;