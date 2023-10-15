import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    let form = new FormData(e.currentTarget)

    axios.post("http://localhost:8000/login/", form)
    .then((res) => {
      toast.success("login successful")
      navigate("/")
    })
    .catch((err) =>{
      if(err.response.data === "Invalid Credentials"){
        toast.error("Invalid Credentials")
      }else{
        for(let key in err.response.data){
          toast.error(`${key} ${err.response.data[key]}`)
        }
      }

    } )
  }
  return (
    <div className='login'>
    <Navbar/>

      <form onSubmit={handleLogin} className='w-50 m-auto'>

        <div className='my-2'>
          <label htmlFor="" className='form-label'>Email</label>
          <input name='email' type="email" className='form-control' />
        </div>

        <div className='my-2'>
          <label htmlFor="" className='form-label'>Password</label>
          <input name='password' type="password" className='form-control' />
        </div>

        <button className="btn btn-secondary w-100">Submit</button>
      </form>
    </div>
  )
}

export default Login