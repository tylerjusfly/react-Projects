import "./css/card.css";
import LukeCombs from "../../statics/images/Lukecombs.png";
import guitarFav from '../../favicon.svg'
import Verifiedsvg from '../../statics/images/verified.svg'

export const Card = ({props}) => {

  let badgeText 
  if(props.verified){ badgeText = 'Verified'}
  else if(!props.verified) { badgeText = 'Not Verified'}

  return (
    <div className="card">
      <img src={props.image_url} alt={props.artist_names} className="card--image" />
      <div className="card--stats">
        <p className="artist--name">{props.artist_names}</p>
        <span>{badgeText} : </span><img src={props.verified ? Verifiedsvg : guitarFav} alt="guitar" className= "card--guitar" />
      </div>
        <p className="full_title"> <span className="bolderized">song_title : </span>{props.title}</p>
        <p className="release--date"><span className="bolderized">release_date : </span>{props.release_date}</p>
        <a href={props.lyrics}>View Lyrics</a>
    </div>
  );
};
