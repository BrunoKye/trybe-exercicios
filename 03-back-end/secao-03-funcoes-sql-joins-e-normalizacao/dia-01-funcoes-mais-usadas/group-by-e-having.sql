USE sakila;
SELECT active, COUNT(*) AS quantity FROM customer
GROUP BY active;

USE sakila;
SELECT store_id, active, COUNT(1) AS quantity FROM customer
GROUP BY store_id, active;

USE sakila;
SELECT rating, AVG(rental_duration) AS avg_rental_duration FROM film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

USE sakila;
SELECT district, COUNT(*) AS quantity FROM address
GROUP BY district
ORDER BY quantity DESC;

USE sakila;
SELECT rating, AVG(length) AS avg_duration FROM film
GROUP BY rating
HAVING avg_duration BETWEEN 115.0 AND 121.50
ORDER BY avg_duration DESC;

USE sakila;
SELECT rating, SUM(replacement_cost) AS total_replacement_cost FROM film
GROUP by rating
HAVING total_replacement_cost > 3950.50
ORDER BY total_replacement_cost;