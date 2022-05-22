import { useState } from 'react'
import close from '../../imgs/icons8-eliminar-24.png'
import closeIcon from '../../imgs/icons8-eliminar-30.png'
import Button from '../Button'
import './style.css'

const Error = () => {

  const [show, setShow] = useState(true)

  // Función con la que manejamos la variable de estado 
  const handleClose = () => {
    // Ponemos lo contrario de lo que tengamos en 'show'
    setShow(!show)
  }

  return (
    <div>
      {
        show ?
        (
          <div className='error__container'>
            <div className='error__centrado'>
              <div className='error__icon'>
                <img className='error__icon-content' src={closeIcon} alt='check' />
              </div>
              <h3 className='error__title'>Upss</h3>
              <p className='error__message'>Algo ha pasado</p> 
            </div>
            <button className='error__btn--close' onClick={handleClose}>
              <img src={close} alt='error' />
            </button>
          </div>
        ) : 
        (
          <div className='error__button'>
            <Button name='Error' handleClose={handleClose} />
          </div>
        ) 
      }
    </div>
  )
}

export default Error