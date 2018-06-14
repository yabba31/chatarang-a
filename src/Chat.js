import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor() {
        super()

        this.state = {
            messages: [
                {id: 1, userName: 'dstrus', body: 'Chatting up a strom, yo!'},
                {id: 2, userName: 'dpalazzo', body: 'This guy is so annoying. I hate my job.'},
            ],
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: this.props.user,
            body,
        })
        
        this.setState({ messages })
    }

    render() {
        return (
            <div 
                className="Chat" 
                style = {styles.chat}
            >
                <ChatHeader />
                <MessageList messages={this.state.messages} user ={this.props.user}/>
                <MessageForm addMessage = {this.addMessage}/>
            </div>
        )
    }
}

const styles = {
    chat: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },
}

export default Chat