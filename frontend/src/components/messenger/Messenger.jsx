import './messenger.css'
import ChatOnline from '../chatOnline/ChatOnline'
import Conversation from '../conversation/Conversation'
import Message from '../message/Message'

export const Messenger = () => {
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
                    <Message />
                    <Message own={true} />
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                </div>
                <div className="chat-box-bottom">
                    <textarea placeholder='Write a mesaage' className="chat-message-input"></textarea>
                    <button className='send-message-button'> Send </button>
                </div>
                </div>
            </div>
            <div className="chat-Online">
                <div className="chatOnlineWrapper">  
                <ChatOnline/>
                <ChatOnline/>
                <ChatOnline/>
                </div>
            </div>
        </div>
        </>
    )
}