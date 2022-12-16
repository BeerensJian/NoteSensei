import "./DropdownListItem.css"
import Modal from "../Modal/Modal"
import { useState } from "react"

const DropdownListItem = ({ children, text }) => {
  // TODO What do we need to show in model
  // - folder ID
  // - fields -> if we wanna enter many fields, how do we do that?
  // - pass in as children make a form component, how do we get data from each form component?
  // - what happens when clickign the action button

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <button onClick={action} className='dropdown-listitem'>
        <span>{children}</span>
      </button>
      {openModal && children}
    </>
  )
}
export default DropdownListItem
