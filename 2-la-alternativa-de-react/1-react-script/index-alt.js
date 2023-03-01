// Aqui vamos a escribir nuestro codigo de React:
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

// Creamos nuestro componente que retorna JSX
const getAvatarJSX = (params) => {
  return (
    <div className='avatar'>
      <img src={params.img} alt={params.name} />
      <span>{params.name}</span>
    </div>
  )
}

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
