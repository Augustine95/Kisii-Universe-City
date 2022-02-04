import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Profile from './components/profile'
import Register from './components/register'
import Logout from './components/logout'
import Login from './components/login'
import Notification from './components/notification'
import QuestionAnswer from './components/questionAnswer'
import Memes from './components/memes'
import Groups from './components/groups'
import Members from './components/members'
import Business from './components/business'
import NavBar from './components/navBar'
import Gadget from './components/gadget'
import UserContext from './context/UserContext'
import avatar from './images/augustine.png'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser({ name: 'Augustine Awuori', avatar })
  }, [])

  return (
    <UserContext.Provider value={user}>
      <section>
        <NavBar />
        <main className="container grid grid--1x2">
          <Routes className="routes">
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/question-answer" element={<QuestionAnswer />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/business" element={<Business />} />
            <Route path="/members" element={<Members />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Gadget heading="Who to follow" />
        </main>
      </section>
    </UserContext.Provider>
  )
}

export default App
