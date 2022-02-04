import React from 'react'

export default function PostCreator({ avatar, onClick }) {
  return (
    <article className="post-creator">
      <img src={avatar} alt="" className="post-creator__avatar" />
      <div className="post-creator__badge" onClick={onClick}>
        Say something...
      </div>
    </article>
  )
}
