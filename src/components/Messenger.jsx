import '../static/css/messenger.css'
import Conversation from './conversation/Conversation'
import Message from './message/Message'

export default function Messenger(){
    return(
        <>
        <div className="Messenger">
            <div className="chat-Menu">
                <div className="chatMenuWrapper"> 
                <input placeholder='Search For Songs' className='chatMenuInput' />
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                 </div>
            </div>
            <div className="chat-Box">
                <div className="chatBoxWrapper"> 
                <div className="chat-box-top">
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className="chat-box-bottom"></div>
                </div>
            </div>
            <div className="chat-Online">
                <div className="chatOnlineWrapper"> Online </div>
            </div>
        </div>
        </>
    )
}