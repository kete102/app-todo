import view from "../components/footer.html";
import "../css/footer.css";
export default () => {
  const footerElement = document.createElement("footer");
  footerElement.innerHTML = view;
  return footerElement;
};
