"use strict";

// Aqui vamos a escribir nuestro codigo de React:
var AVATARS = [{
  img: './img/img-1.jpg',
  name: 'Marta Gonzales'
}, {
  img: './img/img-2.jpg',
  name: 'Felicia Torres'
}, {
  img: './img/img-3.jpg',
  name: 'Monica Perez'
}];

// Creamos nuestro componente que retorna JSX
var getAvatarJSX = function getAvatarJSX(params) {
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: params.img,
    alt: params.name
  }), /*#__PURE__*/React.createElement("span", null, params.name));
};

// Recorremos el array y se el resultado lo pasamos al componente:
var users = AVATARS.map(function (avatarParams) {
  return getAvatarJSX(avatarParams);
});

// Renderizamos los elementos en el DOM:
var app = document.getElementById('app');
var root = ReactDOM.createRoot(app);
root.render(users);
