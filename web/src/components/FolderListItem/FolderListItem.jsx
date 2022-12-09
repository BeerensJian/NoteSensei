import Icon from '../Icon/Icon'
import * as folderService from '../../services/folderService'
import Modal from '../Modal/Modal'
import { useState } from 'react'

const FolderListItem = ({ name, _id }) => {
  const [openModal, setOpenModal] = useState(false)

  const createSubfolder = async (name) => {
    const { response : newSubFolder } = await folderService.createFolder({name, parent : _id})
    console.log(newSubFolder)
  }

  return (
    <>
    <div className='folder-li' style={{outline: '1px solid white', backgroundColor: 'blue', display: 'flex', justifyContent: 'space-between	', alignItems: 'center'}}>
      <span>{name}</span>
      <button onClick={() => setOpenModal(true)} className='btn btn-icon'><Icon fontSize={'24px'} icon={'bi bi bi-plus'}/></button>
    </div>
    <Modal label='Subfolder name:' buttonName='Create' open={openModal} closeModal={() => setOpenModal(false)} action={(value) => createSubfolder(value)}/>
    </>
  )
}
export default FolderListItem