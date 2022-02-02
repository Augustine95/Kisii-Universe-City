import React from 'react'
import PageHeader from './pageHeader'
import { HomeRounded } from '@mui/icons-material'

const Home = () => {
  return (
    <section>
      <PageHeader title="Home" icon={HomeRounded} />
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi
        minus voluptatibus? Nisi in dolorem consequuntur necessitatibus, placeat
        maiores aliquam!
      </p>
    </section>
  )
}

export default Home
