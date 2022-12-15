import './SubfolderListItem.css'

const SubfolderListItem = ({ folder }) => {
  return (
    <div className='subfolder-listitem'>
      <span>{folder.name}</span>
    </div>
  )
}
export default SubfolderListItem