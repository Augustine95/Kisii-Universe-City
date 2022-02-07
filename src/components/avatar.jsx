import React from 'react'

export default function Avatar({ src, className }) {
  const getClassName = () => {
    let name = 'avatar media__image '
    if (className) name += className
    return name
  }

  return (
    <img alt="Post" className={getClassName()} draggable="false" src={src} />
  )
}
