USE sakila;
SELECT * FROM film
WHERE title LIKE '%ace%';

USE sakila;
SELECT * FROM film
WHERE description LIKE '%china';

USE sakila;
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%';

USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%documentary%';

USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

USE sakila;
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';