import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

const NavBar = () => {
  return (
      <nav className="NavBar" >
          <Link to='/'>
            <Logo/>
          </Link>
          <div className="Categories">
              <NavLink to='/category/Hombre' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hombre</NavLink>
              <NavLink to='/category/EDT' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>EDT</NavLink>
              <NavLink to='/category/Mujer' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mujer</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar