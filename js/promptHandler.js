const inquirer = require('inquirer');
const logo = require('asciiart-logo');


const mainChoices = [  
{
    type: `list`,
    message: 'Please Pick an option',
    name: 'main',
    choices: [
    {
        name: 'View Employees',
        value: 'viewEmployees'
    },
    
    {
        name:'Add Employee',
        value:'addEmployee'
    },  
    {
        name:'View Departments',
        value: 'viewDepartments'
    },
    {
        name: 'Add a Department',
        value: 'addDepartment'
    },
    {
        name:'View Roles',
        value:'viewRoles'
    },
    {   
        name:'Add Role',
        value: 'addRole'
    },
    {
        name:'Update Employee',
        value: 'updateEmployee'
    }  
    ]
}];


const addEmployee = () => { 
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
        }) 

    
};

const addRole = [
    'Please Enter a new Role: '
];

const addDepartment = [
    'Enter a new Department Name: '
]




init = () => {

    console.log (logo({
        name:'Employee Tracker',
        font:'3D-ASCII',
        logoColor: 'bold-green'
    }).render()
    );

    prompts();

}

prompts = () => {
    inquirer.prompt(mainChoices)
    .then( choices => {
        handleSwitch(choices);
    })
}


handleSwitch = (choices) => {
    
    switch (choices.main){
        case "viewEmployees":
            viewEmployees();
            break;
        case "addEmployee":
            console.log('i work');
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