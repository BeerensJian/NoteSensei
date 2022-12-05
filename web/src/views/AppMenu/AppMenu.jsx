import './App.scss'
import { Outlet, Link } from 'react-router-dom'


function App() {
  return (
    <>
    <header className='app-menu'>
      <div>
        <h1>NoteSensei</h1>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/notes/ee'>Note</Link>
        <Link to='/notes/create'>Create Note</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
