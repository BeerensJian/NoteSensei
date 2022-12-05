// compact representation of a single note in the Home Screen

const Note = () => {
  return(
    <div className='note'>
      <h4 className='note__title'>Title of note</h4>
      <p className='note__body'>content of note</p>
    </div>
  )
}

export default Note