CREATE TABLE meal (
id INT AUTO_INCREMENT,
title VARCHAR(10),
description TEXT NOT NULL,
location VARCHAR(10),
when_date DATETIME,
max_reservation INT UNSIGNED NOT NULL,
price DECIMAL(5,2),
created_date DATETIME,
PRIMARY KEY (id)
)

CREATE TABLE reservation (
id INT AUTO_INCREMENT,
number_of_guests INT,
meal_id INT,
created_date DATETIME,
contact_phonenumber VARCHAR(10)UNIQUE,
contact_name VARCHAR(10),
contact_email VARCHAR(10)UNIQUE,
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id)
);

CREATE TABLE review (
id INT AUTO_INCREMENT,
title VARCHAR(10),
description TEXT,
meal_id INT,
stars INT,
created_date DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id)
);
--Get all meals
SELECT *
FROM meal;
--Add a new meal
INSERT INTO meal (
  id,
  title,
  description,
  location,
  when_date,
  max_reservation,
  price,created_date) VALUES (
  1,
  'Veg Manchurian',
'Vegetarian balls in spicy sauce with soy sauce (only medium or spicy)',
  'Royal India Valby',
  '2021-01-25 12:00:00',
  10,
  105.00,
  '2021-01-25');
  
  INSERT INTO meal (
  id,
  title,
  description,
  location,
  when_date,
  max_reservation,
  price,created_date) VALUES (
  2,
 'Cheese chillie',
 '
 Spicy cottage cheese with peppers, ginger, garlic and chili.
 Seasoned cottage cheese with peppers, ginger, garlic and chili. 
 ',
 'Royal India Valby',
 '2021-01-25 12:05:00',
 10,
 105.00,
 '2021-01-25');

  INSERT INTO meal (
  id,
  title,
  description,
  location,
  when_date,
  max_reservation,
  price,created_date) VALUES (
  3,
 'Paneer Buttur masala',
 '
 Cottage cheese in rich creamy sauce with onions and tomato puree
Cottage cheese in a rich creamy sauce with onions and tomato paste
 ',
 'Royal India Valby',
 '2021-01-25 12:08:00',
 10,
 105.00,
 '2021-01-25');
  
  --Get a meal with any id, fx 1
 SELECT *
 FROM Meal
 WHERE id=1;

 --Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET location = 'Royal India Roskilde'
WHERE id=1;

--Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 2;

--Get all reservations
SELECT *
FROM reservation;

--Add a new reservation
INSERT INTO reservation (
id,
number_of_guests,
meal_id,
created_date,
contact_phonenumber,
contact_name,
contact_email
) VALUES (
101,
8,
1,
'2021-01-25 12:08:00',
'11111111',
'Charmi',
'ccshah298@gmail.com'
);
INSERT INTO reservation (
id,
number_of_guests,
meal_id,
created_date,
contact_phonenumber,
contact_name,
contact_email
) VALUES (
102,
7,
2,
'2021-01-25 12:08:00',
'11111133',
'Chirag',
'csshah29@gmail.com'
);
INSERT INTO reservation (
id,
number_of_guests,
meal_id,
created_date,
contact_phonenumber,
contact_name,
contact_email
) VALUES (
103,
5,
3,
'2021-01-25 12:08:00',
'11121133',
'Riaan',
'rcshah29@gmail.com'
);

--Get a reservation with any id, fx 1
SELECT *
FROM reservation 
WHERE id = 101;

-- Update a reservation with any id, fx. 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET number_of_guests =10
WHERE id = 102;

-- Delete a reservation with any id, fx. 1.
DELETE FROM reservation
WHERE id = 101;

-- Get all reviews
SELECT *
FROM review;

-- Add a new review
INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'perfect!!!',
    'it was so perfect and delicious',
    1,
    5,
    '2021-01-25 12:08:00'
);

INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'so-so!!!',
    'average/mild/bland',
    3,
    3,
    '2021-01-25 12:08:00'
);
INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'good!!!',
    'tastes very nice',
    2,
    4,
    '2021-01-25 12:08:00'
);

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

--Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT * 
FROM meal
WHERE price < 200;

-- Get only specific number of meals
SELECT *
FROM Meal
LIMIT 3;

-- Get meals that partially match a title.
-- Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE 'Rød grød med%';

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM Reservation
WHERE meal_id = 4
ORDER BY created_date;

-- Get the meals that have good reviews
SELECT meal.id, meal.title, meal.location, review.stars, review.title, review.description, review.created_date
FROM meal
JOIN review ON review.meal_id = meal.id
WHERE review.stars >= 4;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, meal.location, review.title, review.description, review.created_date
FROM meal
JOIN review ON review.meal_id = meal.id
ORDER BY review.stars DESC;

