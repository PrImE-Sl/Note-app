import Links from './Links'
import './Components.css'

const NavBar = () => {

    return (
        <div className='container'>
            <nav className='NAV navbar navbar-expand-lg navbar-dark bg-dark'>
                <Links />
            </nav>
        </div>
    )
}

export default NavBar
