import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export const Protected = (props) => {
  const {component} = props;
  const navigate = useNavigate();
  useEffect(()=>
  {
    let token = localStorage.getItem("token")
    console.log("Token is " + token)
    if(!token)
     navigate("/signin")
    
  })
  return (
    <div> {component }</div>
  )
}