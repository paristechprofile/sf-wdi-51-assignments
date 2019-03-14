flights=# SELECT iata_faa FROM airports WHERE name LIKE '%John F Kennedy%' OR name LIKE '%De Gaulle%'LIMIT 10;
 iata_faa
----------
 CDG
 JFK
(2 rows)

