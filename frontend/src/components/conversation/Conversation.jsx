import './conversation.css'
import NasPac from '../../static/img/naspac.jpg'

export default function Conversation (){
    return(
        <div className="Conversation">
            <img className='conversation-image' src={NasPac} alt="Nas And Pac" />
            <span className="conversationName">TylerJusFly</span>
        </div>
    )
}