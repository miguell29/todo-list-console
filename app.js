import 'colors';

import { menu , pause} from './helpers/inquirer.js';

//console.clear();


const main = async() => { 
    console.log('Hello World');

    let option = '';
    do {
        option = await menu();
        //console.log({ option });
        console.log("\n");
        await pause();
    } while (option !== '0');
};

main();