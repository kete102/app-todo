import view from "../components/navBar.html";
import "../css/header.css";

export default () => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = view;

  return header;
};
