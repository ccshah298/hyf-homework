--Part 1: Working with tasks.......ex
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
CREATE TABLE task (
task_id INT ,
title varchar(30),
description varchar(100),
created datetime,
updated datetime,
due_date datetime,
status_id int,
user_id INT, PRIMARY KEY(task_id)
)
SELECT * from task
INSERT INTO task (task_id,title, description, created, updated, due_date, status_id,user_id)
VALUES (1,"My Timetable", "Study time", "2021-01-17 20:10:22", "2021-01-17 20:25:30", "2021-01-18 12:12:12", 1,101);
       (2,"My Timetable", "break time", "2021-01-17 21:10:22", "2021-01-17 21:25:30", "2021-01-18 13:12:12", 2,102);
       (3,"My Timetable", "Study pause", "2021-01-17 22:10:22", "2021-01-17 2:25:30", "2021-01-18 1:12:12", 1,103);

--for mark as a complete task table
ALTER TABLE task add FOREIGN KEY (status_id) REFERENCES status(status_id)

--Change the title of a task
UPDATE task
SET title='Update Timetable'
WHERE task_id=1;

--Change a task due date
UPDATE task
SET due_date="2021-01-17 24:24:00"
WHERE id=1;

--Change a task status
UPDATE task
SET status_id=3
WHERE id=1;

--Mark a task as complete
CREATE TABLE status (status_id int, status_name varchar(30), primary key (status_id))
INSERT INTO status values (1, "Created")
INSERT INTO status values (2, "In Progress")
INSERT INTO status values (3, "Completed")

--Delete a task
DELETE FROM task WHERE task_id=2;
