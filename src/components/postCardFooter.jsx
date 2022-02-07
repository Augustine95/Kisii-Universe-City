import React, { useRef } from 'react'
import { EmojiEmotionsOutlined, Photo } from '@mui/icons-material'

export default function PostCardFooter({
  onAddPostPhoto,
  onPostUpload,
  onPostEmojiActive,
  postPhoto,
  postMessage,
}) {
  const imagePicker = useRef(null)

  const trimmedMessage = () => postMessage.trim();

  return (
    <footer className="post-card__footer">
      <section>
        <Photo className="icon" onClick={() => imagePicker.current.click()} />
        <input
          hidden
          onChange={onAddPostPhoto}
          ref={imagePicker}
          type="file"
        />
        <span className="icon post-card__footer__emoji-icon">
          <EmojiEmotionsOutlined onClick={onPostEmojiActive} />
        </span>
      </section>
      <button
        className={`btn btn--secondary ${trimmedMessage() ? '' : 'disabled'}`}
        disabled={!trimmedMessage().length && !postPhoto}
        onClick={onPostUpload}
      >
        Post
      </button>
    </footer>
  )
}
