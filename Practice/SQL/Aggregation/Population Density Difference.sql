SELECT (
    SELECT MAX(population)
    FROM city
    ) - (
    SELECT MIN(population)
    FROM city
    );  