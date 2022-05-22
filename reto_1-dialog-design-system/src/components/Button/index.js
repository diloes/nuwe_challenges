import './style.css'


const Button = ({ name, handleClose }) => {

  return (
    <button className='button' onClick={handleClose}>{name}</button>
  )
}

export default Button