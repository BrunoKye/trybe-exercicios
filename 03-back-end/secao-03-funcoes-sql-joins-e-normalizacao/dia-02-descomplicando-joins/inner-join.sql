USE sakila;
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS full_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

USE sakila;
SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

USE sakila;
SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, c.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY full_name DESC
LIMIT 100;

USE sakila;
SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
HAVING full_name LIKE '%rene%';

USE sakila;
SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS `rental_quantity`
FROM customer AS c
INNER JOIN rental AS r
ON c.customer_id = r.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

USE sakila;
SELECT s.first_name, s.last_name, AVG(p.amount) AS 'avg_amount'
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

USE sakila;
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS full_name, fa.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN film AS f
ON fa.film_id = f.film_id;