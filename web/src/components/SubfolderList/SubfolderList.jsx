import { useEffect } from 'react';
import { useState } from "react";
import SubfolderListItem from "../SubfolderListItem/SubfolderListItem";
import * as folderService from '../../services/folderService'

const SubfolderList = ({ parent }) => {
  const [folders, setFolders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // load all subfolders and notes from the parent folder
    const fetchFolders = async () => {
      const {response : subfolders} = await folderService.readSubFolders(parent)
      
    }
    
  })



  return (
    <div className="subfolder-list">
      {folders.length === 0 ? (
        <p>No items in this folder</p>
      ) : (
        folders.map((i) => <SubfolderListItem folder={i} />)
      )}
    </div>
  );
};
export default SubfolderList;
