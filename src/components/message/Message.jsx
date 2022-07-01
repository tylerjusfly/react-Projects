import './message.css'
import ChrisRock from '../../static/img/Chris_Rock.jpg'

export default function Message() {
  return (
    <div className='Message'>
        <div className="message-top">
            <img src={ChrisRock} alt="chris-rock-2017" className="message-image" />
            <p className="message-text"> Hello This Is A Message </p>
        </div>
        <div className="message-bottom"> 1 Hour Ago </div>
    </div>
  )
}
