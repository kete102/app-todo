import view from "../components/welcome.html";
import "../css/welcome.css";
export default () => {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("welcome-section");

  sectionElement.innerHTML = view;

  return sectionElement;
};
