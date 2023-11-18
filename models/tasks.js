import Task from './task.js';

class Tasks{
    _list = {};

    constructor(){
        this._list = {};
    }

    createTask(description = ''){
        const task = new Task(description);
        this._list[task.id] = task;
    }

    get listArray(){
        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        })
        return list;
    }

    loadTasksFromArray(tasks = []){
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    fullList(){
        console.log();
        this.listArray.forEach((task, index) => {
            const i = `${index + 1}`.green;
            const {description, completed} = task;
            const status = (completed) ? 'Completed'.green : 'Pending'.red;
            console.log(`${i} ${description} :: ${status}`);
        });
    }

    isCompleted(estatus){
        let index = 0;
        this.listArray.forEach(task => {
            const {description, completed} = task;
            const status = (completed) ? 'Completed'.green : 'Pending'.red;
            if(estatus){
                if (completed) {
                    index += 1;
                    console.log(`${(index + ".").green} ${description} :: ${completed}`);
                }
            }else{
                if (!completed) {
                    index += 1;
                    console.log(`${(index + ".").green} ${description} :: ${status}`);
                }
            }
        });
    }

    deleteTask(id = ''){
        if(this._list[id]){
            delete this._list[id];
        }
    }

    toggleCompleted(ids = []){
        ids.forEach(id => {
            const task = this._list[id];
            if (!task.completed) {
                task.completed = new Date().toISOString();
            }
        });

        this.listArray.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completed = null;
            }
        });


    }
}


export default Tasks;