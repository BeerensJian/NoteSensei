// Third Party Imports
import './AppMenu.css'
import { Outlet, Link } from 'react-router-dom'

// Component Imports
import FolderMenu from '../../components/FolderMenu/FolderMenu'

function App() {
  return (
    <>
      <header className='app-menu'>
        <div>
          <h1>NoteSensei</h1>
        </div>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/notes/ee'>Note</Link>
          <Link to='/notes/create'>Create Note</Link>
          <FolderMenu />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
