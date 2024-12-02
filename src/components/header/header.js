import "./header.css";

import { container } from "../../components";

import { navigation } from "../header";

export const header = document.createElement("header");

container.append(navigation);
header.append(container);
