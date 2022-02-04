import {
  AccountCircleRounded,
  AddReactionRounded,
  AppRegistrationRounded,
  BusinessCenterRounded,
  GroupsRounded,
  HomeRounded,
  LoginRounded,
  LogoDevRounded,
  LogoutRounded,
  Menu,
  NotificationsRounded,
  PeopleAltRounded,
  QuestionAnswerRounded,
} from '@mui/icons-material'
import React, { useState } from 'react'
import NavigationLink from './NavigationLink'

export default function Bar() {
  const [isCollapsibleExpanded, setCollapsibleExpanded] = useState(false)
  const [links] = useState([
    { icon: HomeRounded, label: 'Home', to: '' },
    { icon: AccountCircleRounded, label: 'Profile' },
    { icon: AddReactionRounded, label: 'Memes' },
    { icon: QuestionAnswerRounded, label: 'QA', to: 'question-answer' },
    { icon: GroupsRounded, label: 'Groups' },
    { icon: PeopleAltRounded, label: 'Members' },
    { icon: BusinessCenterRounded, label: 'B/S', to: 'business' },
    { icon: NotificationsRounded, label: 'Notification' },
    { icon: AppRegistrationRounded, label: 'Register' },
    { icon: LoginRounded, label: 'Login' },
    { icon: LogoutRounded, label: 'Logout' },
  ])

  const getCollapsibleClassName = () =>
    isCollapsibleExpanded ? 'collapsible--expanded' : ''

  const toggleCollapsibleExpansion = () =>
    setCollapsibleExpanded(!isCollapsibleExpanded)

  return (
    <nav className={`nav collapsible ${getCollapsibleClassName()} `}>
      <LogoDevRounded />
      <article className="nav__menu">
        <Menu onClick={toggleCollapsibleExpansion} />
      </article>
      <ul className="list nav__links collapsible__content">
        {links.map(({ icon, label, to }) => (
          <NavigationLink key={label} icon={icon} label={label} to={to && to} />
        ))}
      </ul>
    </nav>
  )
}
