import { useState } from "react"
import { CreateFolderModal } from "../Modal/PremadeModals"

const ModalController = () => {
  const [openCreateFolder, setOpenCreateFolder] = useState(false)
  const [openEditFolder, setOpenEditFolder] = useState(false)
  const [parentId, setParentId] = useState(null)

  const showCreateFolderModal = (parent) => {
    if (parent) setParentId(parent)
    setOpenCreateFolder(true)
  }

  return (
    <>
      {openCreateFolder && (
        <CreateFolderModal closeModal={() => setOpenCreateFolder(false)} />
      )}
      {openEditFolder && ""}
    </>
  )
}
export default ModalController
