import React from 'react';
import './Comment.scss'

const Comment = (props) => {
  return (
    <div className='comment'>
      <div className='comment-info'>
        <span className='userName'> {props.name} </span>
        <small className='date'> {props.date} </small>
      </div>

      <div className='comment-text'>
        <svg width="16" height="8" className="triangle">
          <polyline points="0,100.2 5,0 15,8"></polyline>
        </svg>
        {props.text}
      </div>
    </div>
  )
}

export default Comment;