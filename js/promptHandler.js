const mainChoices = [  
{
    type: `rawlist`,
    name: 'main',
    choices: [
    {
        name: 'View Employees',
        value: 'getEmployees'
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

const addRole = [
    'Please Enter a new Role: '
];

const addDepartment = [
    'Enter a new Department Name: '
]

module.exports = mainChoices;