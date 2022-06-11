import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
  let navigate = useNavigate();
  return (
  <>
  <div className="footer-container">
  <button onClick={() => {navigate("/")
      }}> return to page</button>
   </div>
  
  </>
  )
}

export default Footer