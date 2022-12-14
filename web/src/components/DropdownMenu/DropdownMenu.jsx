import { useRef, useEffect } from "react"
import DropdownListItem from "../DropdownListItem/DropdownListItem"
import { CreateFolderModal } from "../Modal/PremadeModals"
import "./DropdownMenu.css"

const DropdownMenu = ({ anchorElement, show }) => {
  const ref = useRef(null)

  // When the user clicks outside component -> close component
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(!anchorElement.current.contains(event.target))
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !anchorElement.current.contains(event.target)
      ) {
        show(false)
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  // styling and placement

  const offset = {
    // width and height of anchorElement
    width: anchorElement.current.offsetWidth,
    height: anchorElement.current.offsetHeight,
    // the amount of pixels from where the anchorElement is compared to the body
    left: anchorElement.current.offsetLeft,
    top: anchorElement.current.offsetTop,
  }

  const styleObj = {
    top: offset.top + "px",
    left: offset.left + offset.width + 5 + "px",
  }

  return (
    <div ref={ref} style={styleObj} className='dropdown-menu'>
      <DropdownListItem text='Create Subfolder'>C</DropdownListItem>
      <DropdownListItem text='Create note'></DropdownListItem>
      <DropdownListItem text='Edit'>Edit</DropdownListItem>
      <DropdownListItem text='Delete'>Create Note</DropdownListItem>
    </div>
  )
}

export default DropdownMenu
