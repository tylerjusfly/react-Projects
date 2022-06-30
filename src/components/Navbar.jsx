import '../static/css/navbar.css'
import ShakurLogo from '../static/img/shakurLogo.png'
import { BsSearch } from "react-icons/bs";

export default function NavBar(){
  return(
    <nav>
    <a href="#" className="logo-name">
        <img src={ShakurLogo} alt="tupacShakur" />
    </a>
    <span className="search-box">
        <input type="text" placeholder="Search" id="search" />
        <button><BsSearch /></button>
    </span>
    </nav>
  )
}