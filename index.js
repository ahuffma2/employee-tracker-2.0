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
        case "addEmployee":
            addEmployee();
            break;
        case "viewDepartments":
            viewDepartments();
            break;
        case "addDepartment":
            addDepartment();
            break;
        case "viewRoles":
            viewRoles();
            break;
        case "addRoles":
            addRole();
            break;

        case "updateEmployee":
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
            console.log(choices); // CHANGE STUFF HERE
        }).then (prompts())    
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

getAllRoles = () => { 
    //Grab roles from Departments
    //return 
}

getAllDepartments =() => {
    //grab departments from Database
    //return
}

getDepartment = () => {

}


// const addRole = [
//     'Please Enter a new Role: '
// ];

// const addDepartment = [
//     'Enter a new Department Name: '
// ]
