import NavBar from "./controllers/navBar.controller.js";
import Welcome from "./controllers/welcome.controller.js";
import TaskContainer from "./controllers/tasksContainer.controller.js";
import Footer from "./controllers/footer.controller.js";
import "./css/main.css";
const body = document.querySelector("#root");

body.appendChild(NavBar());
body.appendChild(Welcome());
body.appendChild(TaskContainer());
body.appendChild(Footer());
