import React from 'react'
import { Link } from 'react-router-dom'

function User_card({user, showlink=true}) {
     let {name, username, email, id} =user
    // console.log(prop)
  return (
    <div className='border border-black'>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <p>{email}</p>
        {showlink?<Link to={`/users/${id}`}> About user</Link> :null}
      <hr/>
    </div>
  )
}

export default User_card
