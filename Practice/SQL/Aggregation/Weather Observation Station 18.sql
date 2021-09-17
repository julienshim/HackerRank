SELECT ROUND( 
    (SELECT MAX(lat_n) FROM station)-(SELECT MIN(lat_n) FROM station)
    + 
    (SELECT MAX(long_w) FROM station)-(SELECT MIN(long_w) FROM station)
, 4)