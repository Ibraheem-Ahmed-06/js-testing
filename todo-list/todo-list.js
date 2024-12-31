
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Array of tasks
let tasks = [];

// Function to update the taskList HTML element according to
// the tasks array mentioned above.
function updateTaskList () {
  // Empties innerHTML or taskList
	taskList.innerHTML = "";
  
  tasks.forEach((item, index) => {
    // Creates new element
  	const new_li = document.createElement("li");
    new_li.innerHTML = `<input type="checkbox" id="${index}"> \
    <label for="task-${index}">${item.text}</label>`;
    
    // Adds event listener to new element
    new_li
      .querySelector("input")
      .addEventListener("change", () => {
      	tasks[index].completed = !tasks[index].completed;
      })
    
    // Adds new element to taskList
    taskList.appendChild(new_li);
  });
}

function addTask () {
  // Creates a new task according to the taskInput
	let taskText = taskInput.value.trim();
  if (taskText !== "") {
  	tasks.push({
    	text: taskText
    });
    taskInput.value = "";
  }
  
  // Updates task list
  updateTaskList();
}

function clearCompletedTasks () {
  // Removes all tasks that are completed
	tasks = tasks.filter(item => !item.completed);
  
  // Updates task list
  updateTaskList();
}

// Event listeners for buttons
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);



