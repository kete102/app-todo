import view from "../components/tasksContainer.html";
import Task from "./task.controller";
import "../css/tasksContainer.css";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  const tasksWrapper = divElement.querySelector(".tasks-wrapper");
  tasksWrapper.appendChild(Task("low"));
  tasksWrapper.appendChild(Task("medium"));
  tasksWrapper.appendChild(Task("high"));
  tasksWrapper.appendChild(Task("medium"));
  tasksWrapper.appendChild(Task("high"));
  tasksWrapper.appendChild(Task("low"));

  return divElement;
};
