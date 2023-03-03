import ReactDOM from "react-dom/client";
import "./main.css";

// Creamos el componente que vamos a renderizar:
const app = <img src="../img/vite.svg" alt="logo de vite" />;

// Accedemos al div donde vamos a inyectar la app:
const container = document.getElementById("root");

// Usamos el metodo de ReactDOM para renderizar el componente en el DOM virtual:
ReactDOM.createRoot(container).render(app);
