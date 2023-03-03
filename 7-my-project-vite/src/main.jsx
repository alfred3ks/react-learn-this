import ReactDOM from "react-dom/client";
import "./main.css";

// Creamos el componente que vamos a renderizar:
const app = <h1>Mi empresa de sotfware.</h1>;

// Accedemos al div donde vamos a inyectar la app:
const container = document.getElementById("root");

// Usamos el metodo de ReactDOM para renderizar el componente en el DOM virtual:
ReactDOM.createRoot(container).render(app);
