import axios from 'axios'
import React from 'react'
import API from '../services/api'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
function AcceptInvite() {
  const { inviteToken } = useParams()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
   try{
    const response = API.post(`/api/accept-invite/${inviteToken}`)
    setLoading(false)
    console.log(response)
   } catch(error){
    console.error('Error accepting invite:', error)
   }
  }, [inviteToken])
  return (
    <div>
      {loading?(<h1>Accepting Invite...</h1>):(<h1>Invite Accepted!</h1>)}
    </div>
    
  )
}

export default AcceptInvite