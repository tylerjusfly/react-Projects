import './chatonline.css'
import NasPac from '../../static/img/naspac.jpg'

export default function ChatOnline() {
  return (
    <div className='Chatonline'>
        <div className="chat-online-friend">
            <div className="chat-online-img-container">
                <img src={NasPac} alt="" className="chat-online-img" />
                <div className="chat-online-badge"></div>
            </div>
            <span className="chat-online-name">John Doe</span>
        </div>
    </div>
  )
}
