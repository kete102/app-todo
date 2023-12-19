import view from "../components/task.html";
import "../css/taskItem.css";
export default (name, description, priority, category) => {
  const divElement = document.createElement("div");
  divElement.classList.add("task-item");
  divElement.classList.add(priority);
  divElement.innerHTML = view;
  const taskName = divElement.querySelector(".task-name");
  const taskDescription = divElement.querySelector(".task-description");
  const taskCategory = divElement.querySelector(".task-category");

  taskName.textContent = name;
  taskDescription.textContent = description;
  taskCategory.textContent = category;
  return divElement;
};
