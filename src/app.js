import "./style.css";
import { header, main, footer } from "./components";

const app = document.querySelector("#app");

app.append(header, main, footer);
