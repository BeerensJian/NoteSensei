// compact representation of a single note in the Home Screen
import './Note.css'
const Note = ({ note }) => {
  return(
    <div className='note'>
      <h4 className='note__title'>{note.title}</h4>
      <p className='note__body'>{note.body}</p>
    </div>
  )
}

export default Note