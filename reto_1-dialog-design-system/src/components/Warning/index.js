import { useState } from 'react'
import Button from '../Button'
import close from '../../imgs/icons8-eliminar-24.png'
import './style.css'


const Warning = () => {

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
          <div className='warning__container'>
            <div className='warning__centrado'>
              <div className='warning__icon'>
                <p className='warning__icon-content'>!</p>
              </div>
              <h3 className='warning__title'>¡Cuidado!</h3>
              <p className='warning__message'>No podrás volver atrás</p>

              <div className='warning__buttons'>
                <button 
                  className='warning__btn--delete'
                  onClick={handleClose}
                >Borrar</button>
                <button 
                  className='warning__btn--cancel'
                  onClick={handleClose}
                >Cancelar</button>
              </div>  
            </div>
            <button className='warning__btn--close' onClick={handleClose}>
              <img src={close} alt='warning' />
            </button>
          </div>
        ) : 
        (
          <div className='warning__button'>
            <Button name='Warning' handleClose={handleClose} />
          </div>
        )
      }
    </div>
    
  )
}

export default Warning