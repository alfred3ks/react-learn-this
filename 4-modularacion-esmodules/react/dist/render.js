import AVATARS from "./data.js";
import getAvatarJSX from "./component.js";

// Recorremos el array y se el resultado lo pasamos al componente:
var users = AVATARS.map(function (avatarParams) {
  return getAvatarJSX(avatarParams);
});

// Renderizamos los elementos en el DOM:
var app = document.getElementById('app');
var root = ReactDOM.createRoot(app);
root.render(users);