import React from 'react'
import './../../css/message.css'

const MessageBox = (props) => {
  let isError = props.isError ? " error" : " success"
  let messageVisible = props.messageVisible ? "message-box" : "message-box hidden"
  let cssLabel = messageVisible + isError
  return (
    <div className={cssLabel}>
      <div className='message'>{props.message}</div>
      <div className='message-close-button' onClick={props.handleMessage}>x</div>
    </div>
  )
}

export default MessageBox