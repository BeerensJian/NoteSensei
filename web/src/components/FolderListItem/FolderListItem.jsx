import Icon from '../Icon/Icon'
import * as folderService from '../../services/folderService'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { useState, useRef } from 'react'

const FolderListItem = ({ name, _id }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const buttonRef = useRef()

  const createSubfolder = async (name) => {
    const { response : newSubFolder } = await folderService.createFolder({name, parent : _id})
    console.log(newSubFolder)
  }

  return (
    <>
    <div className='folder-li' style={{outline: '1px solid white', backgroundColor: 'blue', display: 'flex', justifyContent: 'space-between	', alignItems: 'center'}}>
      <span>{name}</span>
      <button ref={buttonRef} onClick={() => setOpenMenu(!openMenu)} className='btn btn-icon'><Icon fontSize={'24px'} icon={'bi bi-plus'}/></button>
    </div>
    {openMenu && <DropdownMenu anchorElement={buttonRef} show={(value) => setOpenMenu(value)} createSubfolder={createSubfolder}/>}
    </>
  )
}
export default FolderListItem