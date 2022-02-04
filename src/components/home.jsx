import React, { useState } from 'react'
import avatar from '../images/augustine.png'
import PostCreator from './postCreator'

const Home = () => {
  const [isPostActive, setPostActive] = useState(false)

  const handlePostActive = () => setPostActive(!isPostActive)

  return (
    <section>
      <PostCreator avatar={avatar} onClick={handlePostActive} />
      <article></article>
    </section>
  )
}

export default Home
