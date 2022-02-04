import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AccountCircleRounded,
  AddReactionRounded,
  AppRegistration,
  AppRegistrationRounded,
  BusinessCenterRounded,
  GroupsRounded,
  HomeRounded,
  JoinFullRounded,
  Login,
  LogoDevRounded,
  Logout,
  Menu,
  NotificationsRounded,
  PeopleAltRounded,
  QuestionAnswerRounded,
} from '@mui/icons-material'
import { collapse } from '../utils/js/main'

export default function NavBar() {
  useEffect(() => {
    collapse()
  }, [])

  return (
    <nav className="nav collapsible">
      <LogoDevRounded />
      <article className="nav__menu">
        <Menu />
      </article>
      <section className="nav__links collapsible__content">
        <NavLink to="/" className="nav__link">
          <article className="nav__icon">
            <HomeRounded />
          </article>
          Home
        </NavLink>
        <NavLink to="/profile" className="nav__link">
          <article className="nav__icon">
            <AccountCircleRounded />
          </article>
          Profile
        </NavLink>
        <NavLink to="/memes" className="nav__link">
          <article className="nav__icon">
            <AddReactionRounded />
          </article>
          Memes
        </NavLink>
        <NavLink to="/question-answer" className="nav__link">
          <article className="nav__icon">
            <QuestionAnswerRounded />
          </article>
          QA
        </NavLink>
        <NavLink to="/groups" className="nav__link">
          <article className="nav__icon">
            <GroupsRounded />
          </article>
          Groups
        </NavLink>
        <NavLink to="/members" className="nav__link">
          <article className="nav__icon">
            <PeopleAltRounded />
          </article>
          Members
        </NavLink>
        <NavLink to="/business" className="nav__link">
          <article className="nav__icon">
            <BusinessCenterRounded />
          </article>
          B/S
        </NavLink>
        <NavLink to="/notification" className="nav__link">
          <article className="nav__icon">
            <NotificationsRounded />
          </article>
          Notification
        </NavLink>
        <NavLink to="/register" className="nav__link">
          <article className="nav__icon">
            <AppRegistrationRounded />
          </article>
          Register
        </NavLink>
        <NavLink to="/login" className="nav__link">
          <article className="nav__icon">
            <Login />
          </article>
          Login
        </NavLink>
        <NavLink to="/logout" className="nav__link">
          <article className="nav__icon">
            <Logout />
          </article>
          Logout
        </NavLink>
      </section>
    </nav>
  )
}
