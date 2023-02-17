SET SQL_SAFE_UPDATES = 0;

USE pixar;
INSERT INTO movies (title, director, year, length_minutes)
  VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
         ('Os Incríveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);

USE pixar;
INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
  VALUE (9, 6.8, 450000000, 370000000);
         
USE pixar;
UPDATE movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

USE pixar;
UPDATE movies
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;

USE pixar;
INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
  VALUE (8, 8.5, 300000000, 250000000),
		(10, 7.4, 460000000, 510000000),
        (11, 9.9, 290000000, 280000000);
        
USE pixar;
DELETE FROM box_office
WHERE movie_id = 11;
DELETE FROM movies
WHERE title = 'WALL-E';

USE pixar;
SELECT * FROM movies
WHERE director = 'Andrew Stanton';
DELETE FROM box_office
WHERE movie_id IN (2, 9);
DELETE FROM movies
WHERE director = 'Andrew Stanton';