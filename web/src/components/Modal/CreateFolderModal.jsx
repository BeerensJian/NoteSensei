// Third Party Imports
import { useState } from 'react'
// Local imports
import Modal from './Modal'
import * as folderService from '../../services/folderService'

/**
 *
 * @param closeModal - A Function that unmounts/closes the Modal component
 * @param reload - If needed after you created a folder pass a function to update the UI
 * @returns Component
 */

const CreateFolderModal = ({ closeModal, reload }) => {
  const [folderName, setFolderName] = useState('')

  const createFolder = async () => {
    await folderService.createFolder({ name: folderName })
    closeModal()
    reload()
  }

  return (
    <Modal action={createFolder} buttonName='Create' closeModal={closeModal}>
      <label htmlFor='folderName'>Folder Name:</label>
      <input
        id='folderName'
        type='text'
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
    </Modal>
  )
}
export default CreateFolderModal
