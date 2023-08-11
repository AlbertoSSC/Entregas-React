import "./mystyles.scss";
import { createRoot } from "react-dom/client";
import { Hello } from "./helloComponent";

const root = createRoot(document.getElementById("root"));

root.render(<Hello />);
