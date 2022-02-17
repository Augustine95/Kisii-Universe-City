import React from 'react'
import { Picker } from 'emoji-mart'
import Avatar from '../avatar'
import CreatePostFooter from './createPostFooter'
import CreatePostBody from './CreatePostBody'
import avatar from '../../images/augustine.png'

export default function CreatePostCard({
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
          <CreatePostBody
            onAddPostMessage={onAddPostMessage}
            onRemovePostPhoto={onRemovePostPhoto}
            postPhoto={postPhoto}
          />
          <CreatePostFooter
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
