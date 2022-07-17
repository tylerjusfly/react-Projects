import './navbar.css'
import NavLogo from '../../statics/images/countryLogo.jpg'

export const NavBar = () => {
    return(
        <nav>
            <img className='navbar--logo' src={NavLogo} alt="Guitar Logo" />
        </nav>
    )
}