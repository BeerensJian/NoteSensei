// Third Part Imports
import { useState, useEffect } from "react"

// css
import "./folderMenu.css"

// Component Imports
import FolderListItem from "../FolderListItem/FolderListItem"
import * as folderService from "../../services/folderService"
import { CreateFolderModal } from "../Modal/PremadeModals"

const FolderMenu = () => {
  const [folders, setFolders] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const reload = async () => {
    const { response: fetchedFolders } = await folderService.readFolders()
    setFolders(fetchedFolders)
  }

  useEffect(() => {
    const getFolders = async () => {
      const { response: fetchedFolders } = await folderService.readFolders()
      setFolders(fetchedFolders)
    }
    getFolders()
  }, [])

  return (
    <>
      <div className='folder-menu'>
        <div className='folder-menu__add'>
          <p>folders</p>
          <button onClick={() => setOpenModal(true)}>+</button>
        </div>

        {folders.map((f) => (
          <FolderListItem key={f._id} {...f} />
        ))}
      </div>
      {openModal && (
        <CreateFolderModal
          closeModal={() => setOpenModal(false)}
          buttonName='Create'
          reload={reload}
        />
      )}
    </>
  )
}
export default FolderMenu
