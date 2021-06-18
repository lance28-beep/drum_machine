import React from 'react'
import './Social.css'

function Social({ Icon, href, site }) {
  return (
    <div key={site} className='social'>
      <a href={href}>
        <Icon className='social__icon' />
      </a>
      <p>{site}</p>
    </div>
  )
}

export default Social
