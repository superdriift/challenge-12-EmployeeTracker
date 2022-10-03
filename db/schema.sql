-- we are connected // schema & mysql is working
DROP DATABASE IF EXISTS db_corporation;
CREATE DATABASE IF NOT EXISTS db_corporation;

USE db_corporation; 

CREATE TABLE department(
    name VARCHAR(30) NOT NULL,
    dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    title VARCHAR(30) , 
    department INT, 
    salary DECIMAL(12,2) , 
    manager INT NOT NULL,
    FOREIGN KEY (department)
    REFERENCES department(dept_id)
);

CREATE TABLE roles(
    title VARCHAR(30) NOT NULL, 
    role_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    department INT NOT NULL, 
    salary DECIMAL(12,2) NOT NULL,
    FOREIGN KEY (department)
    REFERENCES department(dept_id)
);

SHOW TABLES;
