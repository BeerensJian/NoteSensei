// Third Part Imports
import { useState, useEffect } from 'react';
import { useRef } from 'react';

// css
import './folderMenu.css'

// Component Imports
import FolderListItem from '../FolderListItem/FolderListItem'
import * as folderService from '../../services/folderService'
import Modal from '../Modal/Modal';


const FolderMenu = () => {
  const [folders, setFolders] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const createFolder = async (name) => {
    const { response : newFolder} = await folderService.createFolder({ name })
    setFolders((prevFolders) => [...prevFolders, newFolder])
    setOpenModal(false)
  }

  useEffect(() =>{
    const getFolders = async () => {
      const { response } = await folderService.readFolders()
      setFolders(response)
    }
    getFolders()
  }, [])

  return(
    <>
    <div className='folder-menu'>
      <div className='folder-menu__add'>
        <p>folders</p>
        <button onClick={() => setOpenModal(true)}>+</button>
      </div>
      
      {folders.map(f => <FolderListItem key={f._id} name={f.name}/>)}
    </div>
    <Modal open={openModal} closeModal={() => setOpenModal(false)} label='Folder name:' buttonName='Create' action={(value) => createFolder(value)}/>
    </>
    )
}
export default FolderMenu;