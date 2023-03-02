// Creamos nuestro componente que retorna JSX
var getAvatarJSX = function getAvatarJSX(params) {
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: params.img,
    alt: params.name
  }), /*#__PURE__*/React.createElement("span", null, params.name));
};
export default getAvatarJSX;