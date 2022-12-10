import { useEffect } from "react"
import { useState, useRef } from "react"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"
import useComponentVisible from "../../utils/useComponentVisible"

const Test = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [ref, setRef] = useState(null)
  const buttonRef = useRef()

  useEffect(() => {
    setRef(buttonRef)
  }, [])

  return(
    <div>
      <h1>Test page</h1>
      <button ref={buttonRef} onClick={() => setShowDropdown(!showDropdown)}>open</button>
      <DropdownMenu anchorElement={ref} show={showDropdown} onClickOutside={() => setShowDropdown(false)}/>
    </div>
  )
}
export default Test