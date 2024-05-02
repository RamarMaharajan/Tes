import { formatDate } from "./utils.js";

export class TaskManager {
    constructor() {
        this.task =[];
    }

    addTask(description, completed = false) {
        const task = {
            description,
            date: formatDate(new Date()),
            completed: completed,
        };
    }
}