/*1) Find out how many tasks are in the task table */
select count(*) 
from task
--35

/*2) Find out how many tasks in the task table do not have a valid due date */
select count(*) 
from task 
where due_date 
is null
--8

/*3) Find all the tasks that are marked as done */
select count(*) 
from task 
where status_id = 
(select id from status where name = 'Done')
--12

/*4) Find all the tasks that are not marked as done */
select count(*) 
from task 
where status_id != 
(select id from status where name = 'Done')
--23
select count(*) 
from task 
where status_id 
in 
(select id from status where name != 'Done')
--23

/*5) Get all the tasks, sorted with the most recently created first */
select * 
from task 
order by created 
desc

/*6) Get the single most recently created task */
select * 
from task 
order by created 
desc limit 1
--1

/*7) Get the title and due date of all tasks where the title or description contains database */
select title, due_date 
from task 
where title 
like '%database%' or description like '%database%'
--5

/*8) Get the title and status (as text) of all tasks */
select t.title, s.name 
from task t, status s 
where t.status_id=s.id
--35

/*9) Get the name of each status, along with a count of how many tasks have that status */
select s.name, count(*) 
from task t, status s 
where t.status_id=s.id 
group by s.name
--3

/*10) Get the names of all statuses, sorted by the status with most tasks first */

select s.name, count(*) 
from task t, status s 
where t.status_id=s.id 
group by s.name 
order by count(*) 
desc
--3




