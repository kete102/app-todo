import view from "../components/tasksContainer.html";
import "../css/tasksContainer.css";
import Task from "./task.controller.js";
import Toastify from "toastify-js";
import {
  updateMyTasksInLocalStorage,
  getMyTasksFromLocalStorage,
} from "../utils/useAddTasks.js";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList.add("tasks-container");
  divElement.innerHTML = view;
  const tasksWrapper = divElement.querySelector(".tasks-wrapper");

  /* Drop Down Menu*/
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

  /*Add new task from form data*/
  const addTaskForm = divElement.querySelector(".dropdown-form");
  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = Object.fromEntries(new FormData(e.target));
    updateMyTasksInLocalStorage(newTask);
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

    //Actualizar vista de los nuevos tasks
    const myTasks = getMyTasksFromLocalStorage();
    tasksWrapper.innerHTML = "";
    myTasks.forEach((task) => {
      tasksWrapper.appendChild(
        Task(task.name, task.description, task.priority, task.category),
      );
    });
  });

  return divElement;
};
