import ReactDOM from "react-dom";
import AVATARS from "./data.js";
import getAvatarJSX from "./component.js";

// Recorremos el array y se el resultado lo pasamos al componente:
const users = AVATARS.map((avatarParams) => {
  return (
    getAvatarJSX(avatarParams)
  )
})

// Renderizamos los elementos en el DOM:
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(users);