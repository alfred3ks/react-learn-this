// Tenemos el contenido a renderizar:
const AVATARS = [
  {
    img: './img/img-1.jpg',
    name: 'Marta Gonzales'
  },
  {
    img: './img/img-2.jpg',
    name: 'Felicia Torres'
  },
  {
    img: './img/img-3.jpg',
    name: 'Monica Perez'
  },
];

// Creamos un componente para mostrar las card:
const getAvatarDOM = (params) => {
  // Creamos los elementos de la card:
  const div = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');
  const text = document.createTextNode(params.name);

  div.appendChild(img);
  div.appendChild(span);
  span.appendChild(text);

  // agregamos los atributos:
  div.className = 'avatar';
  img.src = params.img;

  return div;

}

// Vamos a renderizar los componentes:
AVATARS.forEach((avatarParams) => {
  console.log(avatarParams);
  const avatar = getAvatarDOM(avatarParams);
  document.body.appendChild(avatar)
})