import view from "../components/task.html";
import "../css/taskItem.css";
export default (priority) => {
  const taskPriority = priority;

  const divElement = document.createElement("div");
  divElement.classList.add("task-item");
  divElement.classList.add(taskPriority);

  const taskName = document.getElementById("#task-name");
  const taskDescription = document.getElementById("#task-description");
  const taskCategory = document.getElementById("#task-category");

  divElement.innerHTML = view;

  return divElement;
};
