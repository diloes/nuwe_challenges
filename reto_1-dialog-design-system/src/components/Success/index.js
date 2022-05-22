import { useState } from 'react'
import Button from '../Button'
import close from '../../imgs/icons8-eliminar-24.png'
import check from '../../imgs/icons8-check-36.png'
import './style.css'

const Success = () => {

  const [show, setShow] = useState(true)
  const message = 'Todo ha salio bien :)'

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
          <div className='success__container'>
            <div className='success__centrado'>
              <div className='success__icon'>
                <img className='success__icon-content' src={check} alt='check' />
              </div>
              <h3 className='success__title'>¡Vamos!</h3>
              <p className='success__message'>{message}</p>

              <div className='success__buttons'>
                <button 
                  className='success__btn--closeTab'
                  onClick={handleClose}
                >Cerrar pestaña</button>
              </div>  
            </div>
            <button className='success__btn--close' onClick={handleClose}>
              <img src={close} alt='success' />
            </button>
          </div>
        ) : 
        (
          <div className='success__button'>
            <Button name='Success' handleClose={handleClose} />
          </div>
        )
      }
    </div>
  )
}

export default Success