import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  SupervisedUserCircleRounded,
  VerifiedUser,
  HomeRounded,
  VerifiedUserRounded,
} from '@mui/icons-material'

export default function SideBar() {
  return (
    <aside className="sidebar-nav">
      <nav>
        <NavLink to="/" className="nav__link">
          <HomeRounded />
          <span className="nav__item">
            <h2>Home</h2>
          </span>
        </NavLink>
        <NavLink to="/profile" className="nav__link">
          <VerifiedUserRounded />
          <span className="nav__item">
            <h2>Profile</h2>
          </span>
        </NavLink>
        <NavLink to="/memes" className="nav__link">
          <SupervisedUserCircleRounded />
          <span className="nav__item">
            <h2>Memes</h2>
          </span>
        </NavLink>
        <NavLink to="/groups" className="nav__link">
          <VerifiedUser />
          <span className="nav__item">
            <h2>Groups</h2>
          </span>
        </NavLink>
        <NavLink to="/members" className="nav__link">
          <VerifiedUser />
          <span className="nav__item">
            <h2>Members</h2>
          </span>
        </NavLink>
        <NavLink to="/business" className="nav__link">
          <VerifiedUser />
          <span className="nav__item">
            <h2>B/S</h2>
          </span>
        </NavLink>
        <NavLink to="/notification" className="nav__link">
          <VerifiedUser />
          <span className="nav__item">
            <h2>Notification</h2>
          </span>
        </NavLink>
        <NavLink to="/register" className="nav__link">
          <VerifiedUser />
          <span className="nav__item">
            <h2>Register</h2>
          </span>
        </NavLink>
        <NavLink to="/login" className="nav__link">
          <VerifiedUser />
          <span className="nav__item">
            <h2>Login</h2>
          </span>
        </NavLink>
        <NavLink to="/logout" className="nav__link">
          <VerifiedUser />
          <span className="nav__item">
            <h2>Logout</h2>
          </span>
        </NavLink>
      </nav>
      <button className="btn btn--secondary btn--sretched">Post</button>
    </aside>
  )
}
