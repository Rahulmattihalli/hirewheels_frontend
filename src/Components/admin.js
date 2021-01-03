import React from 'react'
import applogo from './../images/philomath_logo.png'
import {FaUser} from 'react-icons/fa'
import {Switch, Route, NavLink} from 'react-router-dom'
import VehiclesComponent from './../Components/vehiclesComponent'
import Footer from './footer'
export default function admin(props) {
    return (
        <div>
            <nav className="Navigationbar">
        <div className="firstdiv" >
        <img src={applogo} style={{height:50,width:50}}></img>
        <h3>Hire Wheels</h3>
        </div>

        <button className="button" style={{backgroundColor:"blueviolet",width:150,height:30}} onClick={()=>props.history.push("/addvehicle")}>Add a vehicle</button>

        <div className="seconddiv" >
            <div  style={{padding:1}} >
        <FaUser/>
        <NavLink to={"/"} style={{textDecoration:"none"}}>Logout</NavLink>
        </div>
        </div>
        
        </nav>

            <VehiclesComponent></VehiclesComponent>

            <Footer></Footer>
        </div>
    )
}
