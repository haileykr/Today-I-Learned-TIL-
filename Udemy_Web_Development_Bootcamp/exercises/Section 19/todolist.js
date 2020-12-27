let userSays = prompt("Welcome! What do you want to do?");
const todoList = ['Collect the eggs', 'Clean Litter Box'];

while (userSays !== 'quit') {
    if (userSays === 'new') {
        const newTodo = prompt("What would you want to add to the list?");
        todoList.push(newTodo);
        console.log(`${newTodo} added to list.`);
    }
    else if (userSays === 'list') {
        console.log("**********");
        for (let a=0; a<todoList.length; a++){

            console.log(`${a}: ${todoList[a]}`);
        }
        console.log("**********");
    }
    else if (userSays === 'delete') {
        const deleteIndex = prompt("What would you like to delete?")
        todoList.splice(deleteIndex,1);
        console.log("Todo Removed");
    }
    userSays = prompt("What do you want to do?");
}
console.log("You Quit the App!");
