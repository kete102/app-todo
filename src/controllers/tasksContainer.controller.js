import view from "../components/tasksContainer.html";
import Task from "./task.controller";
import "../css/tasksContainer.css";

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

  const addTaskForm = divElement.querySelector(".dropdown-form");
  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, description, priority, category } = Object.fromEntries(
      new FormData(e.target),
    );
    tasksWrapper.appendChild(Task(name, description, priority, category));
    addTaskForm.reset();
  });

  return divElement;
};
