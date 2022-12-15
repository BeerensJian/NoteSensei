import { useEffect } from "react";
import { useState } from "react";
import SubfolderListItem from "../SubfolderListItem/SubfolderListItem";
import * as folderService from "../../services/folderService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const SubfolderList = ({ parent }) => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // load all subfolders and notes from the parent folder
    const fetchChildren = async () => {
      setLoading(true);
      const { response: subfolders } = await folderService.readSubFolders(
        parent
      );
      setFolders(subfolders);
      setLoading(false);
    };
    fetchChildren();
  }, []);

  const subList = (
    <div className="subfolder-list">
      {folders.length === 0 ? (
        <p>No items in this folder</p>
      ) : (
        folders.map((f) => <SubfolderListItem key={f._id} folder={f} />)
      )}
    </div>
  )

  return (
    <>
    {loading ? <LoadingSpinner/> : subList}
    </>
  );
};
export default SubfolderList;
