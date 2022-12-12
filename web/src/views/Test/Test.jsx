import { useEffect } from "react"
import { useState, useRef } from "react"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"


const Test = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const buttonRef = useRef()


  return(
    <div>
      <h1>Test page</h1>
      <button ref={buttonRef} onClick={() => setShowDropdown(!showDropdown)}>open</button>
      {showDropdown && <DropdownMenu anchorElement={buttonRef} show={(value) => setShowDropdown(value)}/>}
    </div>
  )
}
export default Test
