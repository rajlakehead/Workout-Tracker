import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {

  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1></Link>
            <nav>
              <div>
                <button onClick={handleClick}>Log Out</button>
              </div>
              <Link to="/Login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </nav>
      
      </div>
    </header>
  )
}

export default Navbar