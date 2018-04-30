import React from 'react'

export default function UserList(props) {
  let movie = props.userList.map((elem, i) => {
    return(
      <div key={i}>
        <span>{elem.title}</span>
        <span>{elem.year}</span>
        <img src={elem.cover} alt='movie cover'/>
      </div>
    )
  })
  return(
    <div>
      {movie}
    </div>
  )
}
