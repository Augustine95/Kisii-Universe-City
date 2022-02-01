import React from 'react'

export default function Media({ avatar, title, content }) {
  return (
    <article className="media">
      <img src={avatar} className="media__image" alt="" />
      <div className="media__body">
        <div className="media__title">{title}</div>
        <p className="media__content">{content}</p>
      </div>
    </article>
  )
}
