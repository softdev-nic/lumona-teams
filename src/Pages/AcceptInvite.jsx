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
    const response = API.get( `/api/accept-invitation/${inviteToken}`)
    setLoading(false)
    console.log(response)
   } catch(error){
    console.error('Error accepting invite:', error)
   }
  }, [inviteToken])
  return (
    <div className='w-full h-full text-center'>
      {loading?(<h1>Accepting Invite...</h1>):(<h1>Request waiting for approval...</h1>)}
    </div>
    
  )
}

export default AcceptInvite