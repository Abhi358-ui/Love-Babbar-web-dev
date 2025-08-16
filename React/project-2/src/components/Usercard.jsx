
import React from 'react'
import pics from '../assets/react.svg'
import './UserCard.css'

const Usercard = (props) => {
  return (
    <div className='user-container'>

        <p id='user-name'>{props.name} and {props.desc}</p>
        <img src={pics} id='user-image' alt="abhi" />
        <p id='user-desc'>decription of abhishek </p>

    </div>
  )
}

export default Usercard