import React from 'react'

import elijah from '../../content/images/elijahpepesmall.jpg'

export default function Blurb({ title, children }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <img src={elijah} alt="Elijah" className="avatar" />
        </div>
        <div>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </section>
  )
}
