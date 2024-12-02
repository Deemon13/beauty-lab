import { logo, menu } from "../../header";

export const navigation = document.createElement("nav");
navigation.className = "navigation";

navigation.append(logo, menu);
