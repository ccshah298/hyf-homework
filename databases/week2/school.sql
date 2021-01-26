--Part 2: School database......ex
--Create a new database containing the following tables: create new schema school
--Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE Class (
    class_id  INT(10), 
    name varchar(300),
    begins DATE,
    ends DATE,PRIMARY KEY(class_id)
);

--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE Student (
    table_id INT (10),
    name varchar(30),
    email varchar(50),
    phone INT,
    class_id INT,PRIMARY KEY(table_id),
    FOREIGN KEY (class_id) REFERENCES class(class_id)
);

--Create an index on the name column of the student table.
CREATE INDEX name
ON Student (name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ADD status ENUM('not-started', 'ongoing', 'finished')NOT NULL DEFAULT 'not-started';