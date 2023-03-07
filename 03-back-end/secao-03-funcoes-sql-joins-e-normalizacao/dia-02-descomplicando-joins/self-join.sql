USE hr;
SELECT
    CONCAT(e.first_name, " ", e.last_name) AS "Pessoa Colaboradora",
    CONCAT(m.first_name, " ", m.last_name) AS "Gerente"
FROM employees AS e
INNER JOIN employees AS m ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;

USE hr;
SELECT
    CONCAT(m.first_name, " ", m.last_name) AS "Gerente",
	COUNT(*) AS "Pessoas Lideradas"
FROM employees AS e
INNER JOIN employees AS m ON e.manager_id = m.employee_id
GROUP BY m.employee_id;
