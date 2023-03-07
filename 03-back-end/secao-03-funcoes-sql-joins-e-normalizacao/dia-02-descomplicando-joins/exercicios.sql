USE pixar;
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM movies AS m
INNER JOIN box_office AS bo ON m.id = bo.movie_id;

USE pixar;
SELECT m.title, (bo.domestic_sales + bo.international_sales) AS sales
FROM movies AS m
INNER JOIN box_office AS bo ON m.id = bo.movie_id
WHERE bo.domestic_sales < bo.international_sales
ORDER BY sales;

USE pixar;
SELECT m.title, bo.rating
FROM movies AS m
INNER JOIN box_office AS bo ON m.id = bo.movie_id
ORDER BY rating DESC;

USE pixar;
SELECT t.name, t.location, m.title, m.director, m.`year`, m.length_minutes
FROM theater AS t
LEFT JOIN movies AS m ON t.id = m.theater_id
ORDER BY t.name;

USE pixar;
SELECT t.name, t.location, m.title, m.director, m.`year`, m.length_minutes
FROM theater AS t
RIGHT JOIN movies AS m ON t.id = m.theater_id
ORDER BY t.name;

USE pixar;
SELECT m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id
FROM movies AS m
INNER JOIN theater AS t ON m.theater_id = t.id
INNER JOIN box_office AS bo ON m.id = bo.movie_id
WHERE t.id IS NOT NULL AND bo.rating > 8;