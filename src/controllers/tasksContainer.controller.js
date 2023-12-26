import view from "../components/tasksContainer.html";
import "../css/tasksContainer.css";
import TaskItem from "./task.controller.js";
import Toastify from "toastify-js";
import {
  updateMyTasksInLocalStorage,
  getMyTasksFromLocalStorage,
} from "../utils/useAddTasks.js";
import Task from "../utils/task.js";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList.add("tasks-container");
  divElement.innerHTML = view;
  const tasksWrapper = divElement.querySelector(".tasks-wrapper");

  // Renderizar las tareas
  const renderTasks = () => {
    // Actualizar vista de los nuevos tasks
    const myTasks = getMyTasksFromLocalStorage();
    tasksWrapper.innerHTML = "";
    myTasks.forEach((task) => {
      tasksWrapper.appendChild(
        TaskItem(task.name, task.description, task.priority, task.category)
      );
    });
  };
  renderTasks();

  /* Drop Down Menu */
  const dropDownMenu = divElement.querySelector(".dropdown-menu");
  dropDownMenu.style.display = "none";
  const addTaskBtn = divElement.querySelector(".add-task-btn");
  const toggleDropDownMenu = () => {
    if (dropDownMenu.style.display == "none") {
      dropDownMenu.style.display = "block";
    } else {
      dropDownMenu.style.display = "none";
    }
  };

  addTaskBtn.addEventListener("click", () => {
    toggleDropDownMenu();
  });

  /* Add new task from form data */
  const addTaskForm = divElement.querySelector(".dropdown-form");
  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = Object.fromEntries(new FormData(e.target));

    updateMyTasksInLocalStorage(new Task(taskData));
    addTaskForm.reset();
    toggleDropDownMenu();
    Toastify({
      text: "New Task Added",
      className: "info-task-added",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "linear-gradient(to right, #ff5f6d, #ffc371)",
      },
    }).showToast();

    renderTasks();
  });

  const deleteTask = () => {};
  return divElement;
};
