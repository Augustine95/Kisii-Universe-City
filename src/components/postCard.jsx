import React from 'react'
import { Picker } from 'emoji-mart'
import Avatar from './avatar'
import PostCardFooter from './postCardFooter'
import PostCardBody from './postCardBody'
import avatar from '../images/augustine.png'

export default function PostCard({
  isPostEmojiActive,
  onAddPostEmoji,
  onAddPostMessage,
  onAddPostPhoto,
  onPostEmojiActive,
  onPostUpload,
  onRemovePostPhoto,
  postMessage,
  postPhoto,
}) {
  return (
    <section>
      <section className="media">
        <Avatar src={avatar} />
        <article className="post-card">
          <PostCardBody
            onAddPostMessage={onAddPostMessage}
            onRemovePostPhoto={onRemovePostPhoto}
            postPhoto={postPhoto}
          />
          <PostCardFooter
            onAddPostPhoto={onAddPostPhoto}
            onPostEmojiActive={onPostEmojiActive}
            onPostUpload={onPostUpload}
            postPhoto={postPhoto}
            postMessage={postMessage}
          />
        </article>
      </section>
      {isPostEmojiActive && (
        <Picker
          autoFocus
          onSelect={(e) => onAddPostEmoji(e)}
          theme="auto"
          sheetSize={32}
        />
      )}
    </section>
  )
}
