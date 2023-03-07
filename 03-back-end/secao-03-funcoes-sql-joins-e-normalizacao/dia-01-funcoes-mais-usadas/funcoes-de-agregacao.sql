USE sakila;
SELECT 
	AVG(length) AS 'Média de Duração',
	MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(title) AS 'Filmes Registrados'
FROM film;
    