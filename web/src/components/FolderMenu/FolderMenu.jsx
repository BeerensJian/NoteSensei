// Third Part Imports
import { useState, useEffect } from 'react';

// Component Imports
import FolderListItem from '../FolderListItem/FolderListItem'
import * as folderService from '../../services/folderService'


const FolderMenu = () => {
  const [showInput, setShowInput] = useState(false)
  const [folders, setFolders] = useState([])

  useEffect(() =>{
    const getFolders = async () => {
      const { response } = await folderService.readFolders()
      setFolders(response)
    }
    getFolders()
  }, [])

  return(
    <div className='folder-menu'>
      <div className='folder-menu__add'>
        <p>folders</p>
        <button onClick={() => setShowInput(!showInput)}>+</button>
        { showInput && 
        <div>
          <input type="text" />
          <button>v</button>
        </div>}
      </div>
      
      {folders.map(f => <FolderListItem name={f.name}/>)}
    </div>)
}
export default FolderMenu;