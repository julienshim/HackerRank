/*
Enter your query here.
*/

SELECT (months*salary) as earnings, COUNT(*)
FROM employee 
GROUP BY earnings 
ORDER BY earnings 
DESC LIMIT 1;