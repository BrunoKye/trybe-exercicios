USE hr;
SELECT MAX(salary) FROM employees;

USE hr;
SELECT (MAX(salary) - MIN(salary)) FROM employees;

USE hr;
SELECT job_id, AVG(salary) AS avg_salary FROM employees
GROUP by job_id
ORDER BY avg_salary DESC;

USE hr;
SELECT SUM(salary) FROM employees;

USE hr;
SELECT
	MAX(salary),
    MIN(salary),
    AVG(salary),
    SUM(salary)
FROM employees;

USE hr;
SELECT job_id, COUNT(*) FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

USE hr;
SELECT job_id, SUM(salary) FROM employees
GROUP BY job_id;

USE hr;
SELECT job_id, SUM(salary) FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

USE hr;
SELECT job_id, AVG(salary) AS avg_salary FROM employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY avg_salary DESC;

USE hr;
SELECT department_id, COUNT(*) AS employees_quantity, AVG(salary) FROM employees
GROUP BY department_id
HAVING employees_quantity > 10;

SET SQL_SAFE_UPDATES = 0;
USE hr;
UPDATE employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE phone_number LIKE '515%';
SET SQL_SAFE_UPDATES = 1;

USE hr;
SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;

USE hr;
SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

USE hr;
SELECT employee_id, first_name, DAY(hire_date) FROM employees;

USE hr;
SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

USE hr;
SELECT UCASE(first_name) FROM employees;

USE hr;
SELECT employee_id, last_name, hire_date FROM employees
WHERE YEAR(hire_date) = 1987 AND MONTH(hire_date) = 7;

USE hr;
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM employees;