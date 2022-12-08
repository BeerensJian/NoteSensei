import Icon from '../Icon/Icon'

const FolderListItem = ({ name, }) => {
  return (
    <div className='folder-li' style={{outline: '1px solid white', backgroundColor: 'blue', display: 'flex', justifyContent: 'space-between	', alignItems: 'center'}}>
      <span>{name}</span>
      <button className='btn btn-icon'><Icon fontSize={'24px'} icon={'bi bi bi-plus'}/></button>
    </div>
  )
}
export default FolderListItem