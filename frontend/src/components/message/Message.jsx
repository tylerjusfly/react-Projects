import './message.css'
import ChrisRock from '../../static/img/Chris_Rock.jpg'

export default function Message({own}) {
  return (
    // setting an if else statement for class name
    <div className={own ? "Message own" : "Message"}>
        <div className="message-top">
            <img src={ChrisRock} alt="chris-rock-2017" className="message-image" />
            <p className="message-text"> Hello This Is A Message Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt com ! </p>
        </div>
        <div className="message-bottom"> 1 Hour Ago </div>
    </div>
  )
}
