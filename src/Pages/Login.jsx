import React from 'react'
import API from '../services/api'
function Login() {
    const [FormData, setFormData] = React.useState({
        username: '',
        password: ''
    })

    const onHandleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }

        const onHandleSubmit = async(e) => {
            e.preventDefault()
           try{
            const response = await API.post('/api/login', FormData)
            console.log('Login Response:', response)
        } catch(error){
            console.error('Error logging in:', error.response?.data)
        }
    }
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={onHandleSubmit}>
            <input type="text" placeholder='Username' className='border-2 border-gray-300 p-2 rounded-md w-full mb-4' name='username' value={FormData.username} onChange={onHandleChange}/>
            <input type="password" placeholder='Password' className='border-2 border-gray-300 p-2 rounded-md w-full mb-4' name='password' value={FormData.password} onChange={onHandleChange}/>
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md w-full'>Login</button>
        </form>
    </div>
  )
}

export default Login