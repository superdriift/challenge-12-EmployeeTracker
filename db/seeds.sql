USE db_corporation;

INSERT INTO department (name, dept_id)
VALUES ('Sales', 1),
       ('Operations', 2),
       ('Finance', 3),
       ('Ownership', 4);

INSERT INTO employees (id, first_name, last_name, title, department, salary, manager)
VALUES (001, 'John', 'Doe', 'Founder & Owner', 4, 1000000.00, 001),
       (002, 'Jane', 'Doe', 'CEO', 1, 500000.00, 001),
       (003, 'Jack', 'Frost', 'COO', 2, 500000.00, 001),
       (004, 'Kim', 'Swisher', 'CFO', 3, 500000.00, 001),
       (005, 'Ryan', 'Nann', 'Assistant To CEO', 1, 250000.00, 002),
       (006, 'Alex', 'Teeth', 'Sales Manager', 1, 250000.00, 002),
       (007, 'Carl', 'Spiller', 'Assistant To COO', 2, 250000.00, 003),
       (008, 'Anya', 'Stevens', 'Operations Manager', 2, 250000.00, 003),
       (009, 'Klayton', 'Maxx', 'Assistant To CFO', 3, 250000.00, 004),
       (010, 'Ava', 'Johnson', 'Finance Manager', 3, 250000.00, 004);

INSERT INTO roles (title, role_id, department, salary)
VALUES ('CEO', 101, 1, 500000.00),
       ('COO', 201, 2, 500000.00),
       ('CFO', 301, 3, 500000.00),
       ('Assistant To CEO', 102, 1, 250000.00),
       ('Assistant To COO', 202, 2, 250000.00),
       ('Assistant To CFO', 302, 3, 250000.00),
       ('Sales Manager', 103, 1, 250000.00),
       ('Operations Manager', 203, 2, 250000.00),
       ('Finance Manager', 303, 3, 250000.00),
       ('Sales Rep', 104, 1, 250000.00),
       ('Operations Rep', 204, 2, 250000.00),
       ('Finance Rep', 304, 3, 250000.00);



                   






