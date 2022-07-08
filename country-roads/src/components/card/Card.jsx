import "./card.css";
import LukeCombs from "../../statics/images/Lukecombs.png";
import guitarFav from '../../favicon.svg'

export const Card = ({name, image, songTitle}) => {

  return (
    <div className="card">
      <img src={image} alt="lukecombs" className="card--image" />
      <div className="card--stats">
        <p className="artist--name">{name}</p>
        <img src={guitarFav} alt="" className="card--guitar" />
        <span className="is_verified"> "is_verified": true</span>
      </div>
        <p className="full_title"> <span className="bolderized">song_title : </span>{songTitle}</p>
        <p className="release--date"><span className="bolderized">release_date : </span>July 1, 2014</p>
    </div>
  );
};
