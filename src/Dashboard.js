import React from 'react'
import {   useNavigate } from 'react-router-dom'


export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div> Home 

    <button onClick={()=>
      {
       navigate("/logout")
      }}> Logout </button>  
      </div>   
  )
}