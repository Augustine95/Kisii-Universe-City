import React from 'react'

export default function PageHeader({ title }) {
  return (
    <header className="page__header">
      <h1 className="page__title">{title}</h1>
      <p>icon</p>
    </header>
  )
}
