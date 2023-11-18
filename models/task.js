import { v4 as uuidv4 } from 'uuid';

class Task {

    id = '';
    description = '';
    completed = null;

    constructor(description){
        this.description = description;
        this.id = uuidv4();
    }
}
export default Task;