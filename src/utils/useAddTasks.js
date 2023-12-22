export function getMyTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("myTasks")) || [];
}

export function updateMyTasksInLocalStorage(newTask) {
  const myTasks = [...getMyTasksFromLocalStorage()];
  const newTaskToAdd = {
    name: newTask.name,
    description: newTask.description,
    priority: newTask.priority,
    category: newTask.category,
  };

  myTasks.push(newTaskToAdd);
  localStorage.setItem("myTasks", JSON.stringify(myTasks));
}
