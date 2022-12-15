import { useEffect } from "react"
import { useState, useRef } from "react"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"
import SubfolderListItem from '../../components/SubfolderListItem/SubfolderListItem'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'


const Test = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const buttonRef = useRef()


  return(
    <div>
      <h1>Test page</h1>
      <button ref={buttonRef} onClick={() => setShowDropdown(!showDropdown)}>open</button>
      {showDropdown && <DropdownMenu anchorElement={buttonRef} show={(value) => setShowDropdown(value)}/>}
      <LoadingSpinner />
      
    </div>
  )
}
export default Test
