import React from 'react'

export default function PageHeader({ title, icon: Icon }) {
  return (
    <header className="page__header">
      <h1 className="page__title">{title}</h1>
      <Icon className='page__icon' />
    </header>
  )
}
