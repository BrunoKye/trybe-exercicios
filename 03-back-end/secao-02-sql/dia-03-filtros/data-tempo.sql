USE sakila;
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

USE sakila;
SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

USE sakila;
SELECT DATE(rental_date) AS data,
YEAR(rental_date) AS ano,
MONTH(rental_date) AS mes,
DAY(rental_date) AS dia,
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo
FROM rental
WHERE rental_id = 10330;

USE sakila;
SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;