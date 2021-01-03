import React from 'react'
import {useSelector} from 'react-redux'
import applogo from './../images/philomath_logo.png'
import {FaUser} from 'react-icons/fa'
import {Switch, Route, NavLink} from 'react-router-dom'
import Footer from './footer'
export default function Booking(props) {
   
    const state = useSelector(state => state.LoginReducer);
    state.then(data=>console.log("Booking page",data))


    const book=()=>{
        props.history.push("/bookaride")
    }

    return (
        <div>

        <nav className="Navigationbar">
        <div className="firstdiv" >
        <img src={applogo} style={{height:50,width:50}}></img>
        <h3>Hire Wheels</h3>
        </div>

        <div className="seconddiv" >
            <div  style={{padding:1}} >
        <FaUser/>
        <NavLink to={"/"} style={{textDecoration:"none"}}>Logout</NavLink>
        </div>
        </div>
        
        </nav>

        <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:50+"vh"}}>
            <button style={{backgroundColor:"blueviolet", height:50, width:150}} className="button" onClick={book}>Book a ride</button>
          
        </div>
        <Footer></Footer>
        </div>
    )
}
