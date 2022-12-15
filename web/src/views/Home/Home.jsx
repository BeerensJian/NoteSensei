import { useLoaderData, Link } from 'react-router-dom'
import Note from '../../components/note/Note'
import './home.css'

const Home = () => {
  const { response: notes } = useLoaderData() // get the data from the loader, rename response to notes

  return (
    <>
      <div className='options-home'>
        <Link to='/notes/create'>Create Note</Link>
        <button>Import Note</button>
        Sort Notes
      </div>
      <div className='recent-notes'>
        {notes.map((n) => (
          <Note note={n} />
        ))}
      </div>
    </>
  )
}
export default Home
