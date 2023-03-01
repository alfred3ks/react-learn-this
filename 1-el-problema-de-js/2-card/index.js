// Tenemos el contenido a renderizar:
const AVATARS = [
  {
    img: './img/img-1.jpg',
    name: 'Marta Gonzales'
  },
  {
    img: './img/img-2.jpg',
    name: '<h1>Felicia Torres</h1>'
  },
  {
    img: './img/img-3.jpg',
    name: 'Monica Perez'
  },
];

// Creamos un componente para mostrar las card:
const getAvatar = (params) => {
  return `
    <div class="avatar">
      <img src="${params.img}" alt="Marta Gonzales">
      <span>${params.name}</span>
    </div>
  `
}

// Vamos a renderizar los componentes:
AVATARS.forEach((avatarParams) => {
  console.log(avatarParams);
  const avatar = getAvatar(avatarParams);
  document.body.innerHTML += avatar;
})