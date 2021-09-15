SELECT
    CASE
        WHEN a + b > c THEN
            CASE 
                WHEN a = b AND b = c THEN 'Equilateral'
                WHEN a = b OR b = c OR c = a THEN "Isosceles"
                ELSE 'Scalene'
            END
        ELSE 'Not A Triangle'
    END
FROM triangles;