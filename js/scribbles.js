const { default: inquirer } = require("inquirer");

// Create Department Function
// const createDepartment = (name, dept_id) => {
//     db.query(`INSERT INTO department (name, dept_id) VALUES (?,?)`, [name, dept_id], (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         console.table(result);
//     });
// }

const newdeptname = (newdeptname) => {
    db.query(`INSERT INTO department (name) VALUES (?);`, newdeptname, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    }
    );
}


db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
}
);

const createDepartment = () => {
    inquirer.prompt({
        type: 'input',
        message: 'What would you like to name the department?',
        name: 'departmentName'
    },
    ).then((answers) => {
        console.log(answer.departmentName);
        newdeptname(answer.departmentName);
        return
    }
    );
};


const createRole = () => {
    inquirer.prompt({
        type: 'input',
        message: 'What would you like to name the role?',
        name: 'roleName'
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
        },
    ).then((answers) => {
        console.log('role name:', answers.roleName, /n 'salary:', answers.roleSalary, /n 'department:', answers.roleDept);
        // newdeptname('salary', answers.roleSalary);
        return
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



// const newdept = (newdeptname) => {
//     db.query(`INSERT INTO department (name) VALUES (?);`, newdeptname, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(result);
//     }
//     );
// }



