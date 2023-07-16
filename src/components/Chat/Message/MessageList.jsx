import React from "react";
import clasess from './MessageList.module.css'

const MessageList = ({messages}) => {

        return (

          <ul className={clasess.messageList}>
            {messages.map((message, index) => {
                return (
                  <li  key={message.id} className={clasess.message}>
                    <div>{message.senderId}</div>
                    <div>{message.text}</div>
                  </li>
                )
            })}
        </ul>

        )
}

export default MessageList