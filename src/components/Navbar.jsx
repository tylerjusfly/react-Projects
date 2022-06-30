import '../static/css/navbar.css'
import ShakurLogo from '../static/img/shakurLogo.png'

export default function NavBar(){
  return(
    <nav>
    <a href="#" className="logo-name">
        <img src={ShakurLogo} alt="tupacShakur" />
    </a>
    <label className="switch">
            <i className="fas fa-adjust"></i>
            <div>
              <input className= "toggleMe" type="checkbox" />
              <span className="slider round"></span>
            </div>
          </label>
    <span className="search-box">
        <input type="text" placeholder="Search" id="search" />
        <button><i className="fa fa-search"></i></button>
    </span>
    </nav>
  )
}