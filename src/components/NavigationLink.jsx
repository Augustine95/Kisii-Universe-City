import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationLink({ icon: Icon, to, label }) {
  const getUrl = () => `/${to !== undefined ? to : label.toLowerCase()}`

  return (
    <NavLink to={getUrl()} className="nav__link">
      <article className="nav__icon">
        <Icon />
      </article>
      {label}
    </NavLink>
  )
}
