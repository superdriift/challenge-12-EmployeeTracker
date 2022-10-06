const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config();


// const viewDepartment = require('./js/inquirer')


// Express Middleware - 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect db - Used to connect database to node in server.js
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: process.env.DB_PASSWORD,
        // Database you are trying to connect to
        database: 'db_corporation'
    },
    console.log(`Connected to the 'db_corporation' database.`)
);

const viewDepartment = () => {
    db.query(`SELECT * FROM department;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
}
const viewEmployees = () => {
    db.query(`SELECT * FROM employees;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
}
const viewRoles = () => {
    db.query(`SELECT * FROM roles;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
}
const newdeptname = (eggs) => {
    db.query(`DELETE FROM department WHERE name = '?';`, eggs, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    }
    );
    db.query(`INSERT INTO department (name) VALUES (?);`, eggs, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        viewDepartment();
    }
    );
}
const createDepartment = () => {
    inquirer.prompt({
        type: 'input',
        message: 'What would you like to name the department?',
        name: 'departmentName'
    },
    ).then((answers) => {
        console.log(answers.departmentName);
        if (answers.departmentName !== '') {
            eggs = answers.departmentName;
            newdeptname(eggs);
            viewDepartment();
        } else {
            return 'Error'
        }
    }
    );
};

const newrolename = (title, salary, department) => {
    db.query(`INSERT INTO roles (title, salary, department ) VALUES (?,?,?);`, [title, salary, department], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    }
    );
}

const createRole = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'What would you like to name the role?',
        name: 'roleName',
    },
    {
        type: 'number',
        message: 'What is the salary for this role? (Please use numbers and decimals only)',
        name: 'roleSalary'
    },
    {
        type: 'number',
        message: 'To what department will this role belong?',
        name: 'roleDept'
    }]
    ).then((answers) => {
        console.log(
            'role name:', answers.roleName,
            'salary:', answers.roleSalary,
            'department:', answers.roleDept);
             title = answers.roleName;
             salary = answers.roleSalary;
             department = answers.roleDept;
             newrolename(title, salary, department);
             viewRoles();
        return
    }
    );
};

const newemployeename = (first_name, last_name, title, manager) => {
    db.query(`INSERT INTO employees (first_name, last_name, title, manager) VALUES (?,?,?,?);`, [first_name, last_name, title, manager], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    }
    );
}

const createEmployee = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the employee\'s first name?',
        name: 'employeeFirstName',
    },
    {
        type: 'input',
        message: 'What is the employee\'s lsat name?',
        name: 'employeeLastName'
    },
    {
        type: 'input',
        message: 'What will be the employee\'s title?',
        name: 'employeeTitle'
    },
    {
        type: 'number',
        message: 'Who will be the employee\'s manager?',
        name: 'employeeManager'
    }]
    ).then((answers) => {
        console.log(
            'employee first name:', answers.employeeFirstName,
            'employee last name:', answers.employeeLastName,
            'employee title:', answers.employeeRole,
            'employee manager:', answers.employeeManager
            );
             first_name = answers.employeeFirstName;
             last_name = answers.employeeLastName;
             title = answers.employeeTitle;
             manager = answers.employeeManager;
             newemployeename(first_name, last_name, title, manager);
             viewEmployees();
        return
    }
    );
};







const init = () => {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'uno',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Create Department',
            'Create Role',
            'Create Employee',
            'Exit'
        ]
    }
    ).then((answers) => {
        console.log(answers.uno);
        switch (answers.uno) {
            case 'View Departments':
                viewDepartment();
                // init();
                break;
            case 'View Roles':
                viewRoles();
                // init();
                break;
            case 'View Employees':
                viewEmployees();
                // init();
                break;
            case 'Create Department':
                createDepartment();
                break;
            case 'Create Role':
                createRole();
                // console.log('role created');
                break;
            case 'Create Employee':
                createEmployee()
                console.log('employee created')
                break;
            case 'Exit':
                return;
        }
    }
    )
};

init();

