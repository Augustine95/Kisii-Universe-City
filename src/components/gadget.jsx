import React from 'react'

export default function Gadget({ heading }) {
  return (
    <article className="gadget">
      <header className="gadget__header">
        <h2 className="gadget__heading">{heading}</h2>
      </header>
    </article>
  )
}
