import view from "../components/tasksContainer.html";
import Task from "./task.controller";
import "../css/tasksContainer.css";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList.add("tasks-container");
  divElement.innerHTML = view;
  const tasksWrapper = divElement.querySelector(".tasks-wrapper");
  tasksWrapper.appendChild(Task("low"));
  tasksWrapper.appendChild(Task("medium"));
  tasksWrapper.appendChild(Task("high"));
  tasksWrapper.appendChild(Task("medium"));
  tasksWrapper.appendChild(Task("high"));
  tasksWrapper.appendChild(Task("low"));

  /* Drop Down Menu*/
  const dropDownMenu = divElement.querySelector(".dropdown-menu");
  const addTaskBtn = divElement.querySelector(".add-task-btn");

  const toggleDropDownMenu = () => {
    console.log("toogleVisibility");
    if (dropDownMenu.style.display == "none") {
      dropDownMenu.style.display = "block";
      dropDownMenu.classList.add("visible");
    } else {
      dropDownMenu.style.display = "none";
      dropDownMenu.classList.remove("visible");
    }
  };

  addTaskBtn.addEventListener("click", () => {
    toggleDropDownMenu();
  });

  return divElement;
};
