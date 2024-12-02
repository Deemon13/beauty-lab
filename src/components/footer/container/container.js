import { logoFooter, name, prof, address, socialList } from "../../footer";

export const container = document.createElement("div");
container.className = "container";

container.append(logoFooter, name, prof, address, socialList);
