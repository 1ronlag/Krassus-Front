import React from 'react'
import Not from '../../Assets/img/Notfound.png'
import '../Notfound/NotFound.css'

const NotFound = () => {
  return (
    <div className='notFound-Container'>
        <h1 className='title-error'>¡Pagina No encontrada!</h1>
<div className='img-container'>
<img  className="error-img" src={Not} alt="error" />


</div>

    </div>
  )
}

export default NotFound