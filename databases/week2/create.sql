
USE Library;


CREATE TABLE Author (
    Id int NOT NULL,
    Name varchar(100) NOT NULL,
    PRIMARY KEY (`Id`)
 );


CREATE TABLE book (
    Id int NOT NULL AUTO_INCREMENT,
    Name varchar(100) NOT NULL,
    Price int(10) NOT NULL,
    Language enum('English','Danish','French') DEFAULT NULL,
    Author_id int,
    PRIMARY KEY (`Id`),
    CONSTRAINT `fk_book_author` FOREIGN KEY (`Author_id`) REFERENCES `Author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO Library.book (Id, Name, Price, Language) VALUES ('1', 'Key of Life', '100', 'English');
INSERT INTO Library.book (Id, Name, Price, Language) VALUES ('2', 'A Girl Shoe', '200', 'English');

CREATE TABLE Customers (
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(50) NOT NULL,
    Phone int(10) NOT NULL,
    City enum('Glostrup','Brande','Herning') DEFAULT NULL,
    PRIMARY KEY (`ID`)
);
INSERT INTO Library.Customers (ID, Name, Phone, City) VALUES (1, 'Charmi', '912345678', 'Glostrup');
INSERT INTO Library.Customers (ID, Name, Phone, City) VALUES (2, 'Dorothy', '912345687', 'Herning');

create table status (
id int not null,
name varchar(10) not null,
primary key (id)
);

insert into status values (1,'Issued');
insert into status values (2,'Returned');

drop table Orders
CREATE TABLE Orders (
	ID int NOT NULL AUTO_INCREMENT,
    Customer_ID int NOT NULL,
    Order_date DATETIME NOT NULL,
    Due_date DATETIME NOT NULL,
    Book_ID int NOT NULL,
    Status_id int NOT NULL,
    PRIMARY KEY (`ID`),
    CONSTRAINT `fk_orders_customers` FOREIGN KEY (`Customer_ID`) REFERENCES `Customers` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_orders_book` FOREIGN KEY (`Book_ID`) REFERENCES `Book` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_orders_status` FOREIGN KEY (`Status_ID`) REFERENCES `Status` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO Library.Orders (ID, Customer_ID, Order_date,Due_date,Book_ID, Status_Id) VALUES (1, 1, '2021-01-19', '2021-02-19',1, 1);
