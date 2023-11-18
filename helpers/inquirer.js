import inquirer from 'inquirer';
import 'colors';

const questions =[
    {
        type:'list',
        name:'option',
        message:'Choose an option',
        choices:[
            {
                value:'1',
                name:`${'1.'.green} Create Task`
            },
            {
                value:'2',
                name:`${'2.'.green} Task List`
            },
            {
                value:'3',
                name:`${'3.'.green} Task List Completed`
            },
            {
                value:'4',
                name:`${'4.'.green} Task List Pending`
            },
            {
                value:'5',
                name:`${'5.'.green} Complete Task(s)`
            },
            {
                value:'6',
                name:`${'6.'.green} Delete Task`
            },
            {
                value:'0',
                name:`${'0.'.green} Exit`
            }
        ]},
        {
            type:'input',
            name:'pause',
            message:`Press ${'ENTER'.green} to continue`
        }
];


export const menu = async () => {
    console.clear();
    const {option} = await inquirer.prompt(questions[0]);
    console.log(option);
    return option;
}
export const pause = async () => {
    const {pause} = await inquirer.prompt(questions[1]);
    return pause;
}

export const readLine = async (message) => {
    const questions = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ]
    
    const {description} = await inquirer.prompt(questions);
    return description;
}

