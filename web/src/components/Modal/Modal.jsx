import { useRef } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'

const Modal = ({ buttonName, children, closeModal, action }) => {
  return (
    <Backdrop>
      <div className='modal-container'>
        {children}
        <div className='modal-options'>
          <button onClick={closeModal}>Exit</button>
          <button onClick={action}>{buttonName}</button>
        </div>
      </div>
    </Backdrop>
  )
}
export default Modal
