import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import SideBar from './components/sideBar'
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

function App() {
  return (
    <main className="main">
      <SideBar />
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
    </main>
  )
}

export default App
