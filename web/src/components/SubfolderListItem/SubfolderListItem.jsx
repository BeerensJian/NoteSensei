import './SubfolderListItem.css'
import { useState } from 'react'
import SubfolderList from '../SubfolderList/SubfolderList'

const SubfolderListItem = ({ folder }) => {
  const [openFolder, setOpenFolder] = useState(false)

  return (
    <div className='subfolder'>
      <div
        onClick={() => setOpenFolder(!openFolder)}
        className='subfolder-listitem'
      >
        <span>{folder.name}</span>
      </div>
      {openFolder && <SubfolderList parent={folder._id} />}
    </div>
  )
}
export default SubfolderListItem
