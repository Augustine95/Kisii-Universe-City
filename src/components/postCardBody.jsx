import React from 'react'
import { CancelRounded } from '@mui/icons-material'

export default function PostCardBody({
  onAddPostMessage,
  onRemovePostPhoto,
  postPhoto,
}) {
  return (
    <section>
      <textarea
        className="post-card__textarea"
        value={postMessage}
        onChange={onAddPostMessage}
        placeholder="Type a message... "
      />
      {postPhoto && (
        <section className="post-card__image-input">
          <CancelRounded
            className="post-card__image-cancel-icon"
            onClick={onRemovePostPhoto}
          />
          <img src={postPhoto} alt="Post" />
        </section>
      )}
    </section>
  )
}
