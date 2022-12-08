import { useRef } from "react"
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css'

const Modal = ({buttonName, label, open, closeModal, action}) => {
  const inputRef = useRef() // using refs because we only need the value once
  
  if (!open) {
    return null;
  }

  return (
    <Backdrop>
      <div className="modal-container">
        <div className="modal-input">
          <label htmlFor="modalInput">{label}</label>
          <input ref={inputRef} type="text" id="modalInput"/>
        </div>
        <div className="modal-options">
          <button onClick={closeModal}>Exit</button>
          <button onClick={() => action(inputRef.current.value)}>{buttonName}</button>
        </div>
      </div>
    </Backdrop>
  )
}
export default Modal