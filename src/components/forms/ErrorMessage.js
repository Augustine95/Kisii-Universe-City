import React from 'react'

export default function ErrorMessage({ error, visible }) {
    if (!error || !visible) return null;

    return <span className="input__error-message">{error}</span>
}
