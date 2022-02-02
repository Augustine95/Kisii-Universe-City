import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HomeRounded,
  QuestionAnswerRounded,
  GroupsRounded,
  EmojiEmotionsRounded,
  PeopleAltRounded,
  BusinessCenterRounded,
  NotificationImportant,
  AppRegistration,
  Login,
  Logout,
  PersonRounded,
  LinkRounded,
} from '@mui/icons-material'

export default function SideBar() {
  return (
    <aside className="sidebar-nav">
      <nav>
        <LinkRounded className='nav__link logo' />
        <NavLink to="/" className="nav__link">
          <HomeRounded />
          <span className="nav__item">
            <h2>Home</h2>
          </span>
        </NavLink>
        <NavLink to="/profile" className="nav__link">
          <PersonRounded />
          <span className="nav__item">
            <h2>Profile</h2>
          </span>
        </NavLink>
        <NavLink to="/memes" className="nav__link">
          <EmojiEmotionsRounded />
          <span className="nav__item">
            <h2>Memes</h2>
          </span>
        </NavLink>
        <NavLink to="/question-answer" className="nav__link">
          <QuestionAnswerRounded />
          <span className="nav__item">
            <h2>QA</h2>
          </span>
        </NavLink>
        <NavLink to="/groups" className="nav__link">
          <GroupsRounded />
          <span className="nav__item">
            <h2>Groups</h2>
          </span>
        </NavLink>
        <NavLink to="/members" className="nav__link">
          <PeopleAltRounded />
          <span className="nav__item">
            <h2>Members</h2>
          </span>
        </NavLink>
        <NavLink to="/business" className="nav__link">
          <BusinessCenterRounded />
          <span className="nav__item">
            <h2>B/S</h2>
          </span>
        </NavLink>
        <NavLink to="/notification" className="nav__link">
          <NotificationImportant />
          <span className="nav__item">
            <h2>Notification</h2>
          </span>
        </NavLink>
        <NavLink to="/register" className="nav__link">
          <AppRegistration />
          <span className="nav__item">
            <h2>Register</h2>
          </span>
        </NavLink>
        <NavLink to="/login" className="nav__link">
          <Login />
          <span className="nav__item">
            <h2>Login</h2>
          </span>
        </NavLink>
        <NavLink to="/logout" className="nav__link">
          <Logout />
          <span className="nav__item">
            <h2>Logout</h2>
          </span>
        </NavLink>
      </nav>
      <button className="btn btn--secondary btn--sretched">Post</button>
    </aside>
  )
}
