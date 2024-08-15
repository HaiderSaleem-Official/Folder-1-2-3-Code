import React from 'react'

const UserCards = (props) => {
  return (
    <div>
        INPUT: <input type='text' onChange={props.change}/>
        <h1>Username: {props.name}</h1>
        <h1>Userjob: {props.job}</h1>
    </div>
  )
}

export default UserCards