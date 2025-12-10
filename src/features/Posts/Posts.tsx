import React from 'react'
import { userData } from '../../../data'
import Post from '../Post/Post'

const Posts = () => {
  return (
    <>
      {userData.map(user =>(
        <Post username={user.username} />
      ))}
    </>
  )
}

export default Posts