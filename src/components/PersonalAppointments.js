// import  { useEffect } from 'react'
import React, { useContext, useEffect, useState } from "react";
import "./styles/appointment.css"

import appointmentContext from "../context/appointment/appointmentContext";
const PersonalAppointments = () => {
    const context2 = useContext(appointmentContext);
    const{getPersonalAppointments,personalAppointments} =context2;
    // const [json, setjson] = useState();
    useEffect(() => {
     getPersonalAppointments()
    //  console.log(personalAppointments.appointments);
    }, [])
    
// console.log(json)
  return (
    <>
    {personalAppointments.map((appoint)=>{
      return (
        <>
          <h2 className="appointmentId" key={appoint}>{appoint}</h2>
        </>
      )
    })}
    </>
  )
}

export default PersonalAppointments