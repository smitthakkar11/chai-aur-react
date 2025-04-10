import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div>User: {userid}</div>
  )
}
//dynamic access for displaying 
export default User