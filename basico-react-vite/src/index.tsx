import "./mystyles.scss";
import { createRoot } from "react-dom/client";
import { Hello } from "./hello";

const root = createRoot(document.getElementById("root"));

root.render(<Hello />);
