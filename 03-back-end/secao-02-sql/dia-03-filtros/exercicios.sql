USE store;
SELECT * FROM itens
WHERE name LIKE 'gr%';

USE store;
SELECT * FROM supplies
WHERE item_id = 2
ORDER BY supplier_id;

USE store;
SELECT item_id, price, supplier_id FROM supplies
WHERE supplier_id LIKE '%n%';

USE store;
SELECT * FROM suppliers
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

USE store;
SELECT COUNT(*) FROM suppliers
WHERE id LIKE '%f%';

USE store;
SELECT * FROM supplies
WHERE price BETWEEN 15 AND 40
ORDER BY price;

USE store;
SELECT COUNT(*) FROM sales
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';