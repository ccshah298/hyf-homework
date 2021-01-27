CREATE TABLE User (	id int(10), 
					username char(50), 
					Email varchar(10), 
                    password varchar(20), 
                    Regdate Datetime, 
                    primary key(id)
                    );

CREATE TABLE Post ( id int(10),
					title varchar(50),
					when_created datetime,
					when_updated datetime, 
                    User_id int(10),
                    primary key(id),
                    constraint `post_user_id` foreign key (`User_id`) references user(`id`)
                    );

CREATE TABLE Comment (	id int(10),
						Content varchar(100),
						when_created datetime,
                        when_Updated datetime,
                        User_id int(10),
                        Post_id int(10),
                        parent_comment_id int(10),
                        primary key(id),
						constraint `comment_user_id` foreign key (`User_id`) references user(`id`),
						constraint `comment_post_id` foreign key (`Post_id`) references Post(`id`),
						constraint `comment_parent_cid` foreign key (`parent_comment_id`) references COmment(`id`)
                   );


CREATE TABLE Reaction (	id int(10),
						Reaction_name char(20),
                        primary Key(id)
					  );

insert into Reaction values (1,'like'); 
insert into Reaction values (2,'highfive'); 
insert into Reaction values (3,'laugh'); 
insert into Reaction values (4,'cry'); 


alter table Post add ( reaction_id int(10), 
					   constraint `Post_Reaction_id` foreign key (`reaction_id`) references Reaction(`id`)
                      );
                      
alter table Comment add ( reaction_id int(10), 
					   constraint `Comment_Reaction_id` foreign key (`reaction_id`) references Comment(`id`)
                      );



INSERT INTO User (	id , 
					username , 
					Email , 
                    password , 
                    Regdate Datetime, 
                    );
            VALUES(
                1,
                'Charmi Shah',
                'ccshah29@gmail.com',
                'sssssl',
                '27-01-2021 9:00:00',
            );
INSERT INTO   Post ( id ,
					title ,
					when_created,
					when_updated, 
                    User_id 
                   );                 
             VALUES(
                 1,
                 'Beautiful Picture Gallary',
                 '27-01-2021 9:00:00',
                 '27-01-2021 9:10:00',
                 101
             );
INSERT INTO   Comment (	id ,
						Content ,
						when_created ,
                        when_Updated ,
                        User_id ,
                        Post_id ,
                        parent_comment_id ); 
                VALUES(
                    1,
                    'beautiful',
                    '27-01-2021 9:00:00',
                    '27-01-2021 9:00:00',
                    101,
                    1,
                    201
                );
                                         