import React from 'react'

export default function UserItem({user}) {
  return (
    <>
     <div className="user-item">
      <img src={user.avatar} alt={user.first_name} />
      <h6>{user.first_name + " " + user.last_name}</h6>
      <p>{user.email}</p>
    </div>
    </>
  )
}
