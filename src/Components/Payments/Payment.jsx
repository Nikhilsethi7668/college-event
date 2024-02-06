import React from 'react'
import { useState } from 'react'
import './Payment.css'
import { NavLink } from 'react-router-dom';

function Payment() {
  const [paymentDues, setPaymentDues] = useState(false);

  return (
    <div className="payment" >
      <h2>Check your payment status here</h2>
      <center>
        <h1>{paymentDues ? "CLEAR YOUR DUESS!!!" : "NO DUES!!! "}</h1>


      </center>
      <div className="check">
        <NavLink to="/"><button>{paymentDues ? "Check Dues" : "GO BACK"}</button></NavLink>
      </div>

    </div>
  )
}

export default Payment