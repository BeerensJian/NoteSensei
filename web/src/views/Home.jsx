import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { response: notes } = useLoaderData() // get the data from the loader, rename response to notes

  return(
    <>
    <div className='note__options'>
      <button>Create Note</button>
      <button>Import Note</button>
      Sort Notes
    </div>
    <div className='recent__notes'>
      {notes.map((n) => <p>some note </p>)}
    </div>
    </>
  )
}
export default Home;