-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Create a database called "famous_people"

CREATE TABLE people (
	id SERIAL PRIMARY KEY,
	name varchar(255),
	role varchar(255)
);

INSERT INTO "people" ("name", "role") 
VALUES ('Catherine O''Hara', 'Moira Rose'), ('Eugene Levy', 'Johnny Rose'), ('Dan Levy', 'David Rose'), ('Annie Murphy', 'Alexis Rose');