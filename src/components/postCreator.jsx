import React from 'react'
import Avatar from './avatar'

export default function PostCreator({ avatar, onClick }) {
  return (
    <article className="media post-creator">
      <Avatar src={avatar} className='avatar--small' />
      <div className="post-creator__badge" onClick={onClick}>
        Say something...
      </div>
    </article>
  )
}
