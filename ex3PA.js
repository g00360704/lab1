let tasksArray = [];

let addTask = (task) => {
    tasksArray.push(task);
    console.log("Task: " + task + " has been added to the Array ");
    return tasksArray.length;
}

let listAllTasks = () => {
    console.log("All tasks:");
    for (let i = 0; i < tasksArray.length; i++) {
        console.log(tasksArray[i]);
    }

    tasksArray.forEach((item) => {
        console.log(item);
    });
}

let deleteTask = (task) => {
    let index = tasksArray.indexOf(task);
    if (index > -1) {
        tasksArray.splice(index, 1);
        console.log("Task: " + task + " has been removed from the array");
    } 
    return tasksArray.length;
}

addTask("Learn 25");
addTask("Learn React");

listAllTasks();

deleteTask("Learn 25");

listAllTasks();