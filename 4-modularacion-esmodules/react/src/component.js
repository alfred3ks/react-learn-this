// Creamos nuestro componente que retorna JSX
const getAvatarJSX = (params) => {
  return (
    <div className='avatar'>
      <img src={params.img} alt={params.name} />
      <span>{params.name}</span>
    </div>
  )
}

export default getAvatarJSX;