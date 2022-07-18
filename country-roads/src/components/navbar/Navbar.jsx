import './css/navbar.css'
import NavLogo from '../../statics/images/countryLogo.jpg'

export const NavBar = () => {
    return(
        <nav className='nav--bar'>
            <img className='navbar--logo' src={NavLogo} alt="Guitar Logo" />
        </nav>
    )
}