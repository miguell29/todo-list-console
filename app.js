import 'colors';

import { menu , pause , readLine} from './helpers/inquirer.js';
import Tasks from './models/tasks.js';
import {saveData, readData} from './helpers/handleData.js';



const main = async() => { 

    const tasks = new Tasks();
    const data = readData();
    if (data) {
        tasks.loadTasksFromArray(data);
    }
    let option = '';
    do {
        option = await menu();
        switch (option) {
            case '1':
                const description = await readLine('write the description of the task:');
                tasks.createTask(description);
                console.log('Task created');
                console.log(description);
                break;

            case '2':
                //console.log(tasks.listArray);
                tasks.fullList();
                break;
            case '3':
                tasks.isCompleted(true);
                break;
            case '4':
                tasks.isCompleted(false);
                break;
        }
        saveData(tasks.listArray);
        await pause();
    } while (option !== '0');
};

main();