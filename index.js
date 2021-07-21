const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const mainChoices = require('./js/promptHandler');
const connection = require('./employeeDBConnection');
const consoleTable = require('console.table');

init = () => {
    console.log (logo({name:'Employee Tracker',font:'3D-ASCII',logoColor: 'bold-green'}).render());   
    prompts();
}

async function prompts() {
    inquirer.prompt(mainChoices)
    .then( choices => {
        handleSwitch(choices);
    })
}

handleSwitch = (choices) => {
    
    switch (choices.main){
        case "getEmployees":  
            getEmployees();
            break;
        case "addEmployee":    //NEED TO WORK
            addEmployee();
            break;
        case "getDepartments":   
            getDepartments();
            break;
        case "addDepartment": //NEED TO WORK
            addDepartment();
            break;
        case "getRoles":
            getRoles();
            break;
        case "addRole":  //NEED TO WORK
            addRole();
            break;
        case "updateEmployee":     //NEED TO WORK
            updateEmployee();
            break;   
    }
}

init();

 addEmployee = () => { 
    //const dbEmployees; //= get list of employees to append;

    const roles = [];   // = getROLES FROM DB;   []

    let newEmployee = 
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter First Name: ',
                name:'first_name'
            },
            {
                type:'input',
                message:"Enter the Last Name: ",
                name:'last_name'
            },
            // {
            //     type:'list',
            //     message: 'Select from roles below',
            //     name: 'role', //FIND A WAY TO GET THE ID 
            //     choices: roles
            // },
            {
                type: 'input',
                message: 'If there is a manager enter their ID, else leave blank',
                name: 'manager_id'
            }
        ]).then(choices => {
                        // CHANGE STUFF HERE
            prompts();
        })
};

getEmployees = () => {
    connection.query('SELECT * FROM employee', (err,res) => {
        if (err) throw err;
            let table = consoleTable.getTable(res);
            console.log(table);
        })
    prompts();
}

updateEmployee = () => {
    thisEmployee = getEmployee();
    //Do Stuff to change employee
    //change first name? Y/N
    //change last name? Y/N
    //change database(user pick)

    //display changes

    //update thisEmployee
    return
}

getRoles = () => { 
    connection.query('SELECT * FROM role', (err,res) => {
        if (err) throw err;
            let table = consoleTable.getTable(res);
            console.log(table);
        })
    prompts();
}

addRole = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'role_title',
            message:'Enter the new role'
        },
        {
            type:'input',
            name: 'role_salary',
            message: 'Enter the Salary for this role'
        },
        {
            type:'list',
            name: 'role_department',
            message: 'Which Department does this role belong to?',
            choices: ['N/A']
        }
        ])
        .then((choices) => {
            //connection.query(`INSERT INTO roles (${choices.role_title}`)
            prompts();
        })
}

addDepartment = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'department_name',
            message:'Whats the Department Name? '
        }
    ])
    .then((choices) => {
        connection.query('INSERT INTO department SET ? ',
        {
            name: choices.department_name,
        }, 

        (err) => {
            if (err) throw console.log(err);
        });

        prompts();
    });
}

getDepartments =() => {
    connection.query('SELECT * FROM department', (err,res) => {
        if (err) throw err;
            let table = consoleTable.getTable(res);
            console.log(table);
        })
    prompts();
}

