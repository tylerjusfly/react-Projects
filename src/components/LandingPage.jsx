import '../static/css/main.css'
import Naspac from '../static/img/naspac.jpg'  //importing locally stored image


  export default function LandingPage(){
    return   (
      <div className="container">
      <div className="sm-pacify">
          <div className="app-name"> PACIFY</div>
          <div className="poem-title">The 🌹Rose That Grew From Concrete</div>
          </div>
      <section className="image-container">
          <img src={Naspac} alt="pac Holding A mic"/>
      </section>
          <section className="section-text">
              <div className="pacify">PACIFY </div>
          <div className="heatOfMusicDiv">STREAM THE HEAT OF MUSIC</div>
          <button> <a href="./library.html">Stream Now</a> </button>
      </section>
      </div>
        )
  }
