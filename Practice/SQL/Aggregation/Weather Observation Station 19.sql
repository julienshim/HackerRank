SELECT ROUND(SQRT( 
    POW((SELECT MAX(lat_n) FROM station)-(SELECT MIN(lat_n) FROM station), 2)
    + 
    POW((SELECT MAX(long_w) FROM station)-(SELECT MIN(long_w) FROM station), 2)
), 4)