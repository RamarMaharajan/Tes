import { TaskManager } from "./task.js";

document.getElementById("done").addEventListener("click", () =>{ 
completed();
});

const manager = new TaskManager();
manager.addTask("Learn JavaScript modules");
console.log(manager.task);

function completed() {
    manager.addTask("Classes", true);
    console.log(manager.task);
}