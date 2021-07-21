DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;
USE employee_db;


CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);

INSERT INTO department(NAME)
VALUES("LEADS");

INSERT INTO department(NAME)
VALUES("Support");

INSERT INTO department(NAME)
VALUES("Tech Support");

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DEC(10,2) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department (id)
);


INSERT INTO role(title,salary,department_id)
VALUES("Senior Dev", 111000,1),("Deputy Director",70000,2),("Janitor",2000,3);

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
role_id INT NOT NULL,
manager_id INT NULL,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,

FOREIGN KEY (role_id) references role(id),
FOREIGN KEY (manager_id) references employee (id),
PRIMARY KEY (id) 
);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("Topher","Grace",1,null),("William","Shatner",2,1), ("Ron", "Swanson", 2 , null), ("Leslie","Knope",3,2);



