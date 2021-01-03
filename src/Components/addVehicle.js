import React, { useState } from 'react'
import applogo from './../images/philomath_logo.png'
import {FaUser} from 'react-icons/fa'
import {Switch, Route, NavLink} from 'react-router-dom'
import VehiclesComponent from './../Components/vehiclesComponent'
import Footer from './footer'
export default function AddVehicle() {

    const [car, setCarProperty] = useState({vehicle_type:null, vehicle_owner:null, vehicle_model:null, vehicle_number:null,fuel_type:null,color:null, price:null })

    const update=(args)=>{
        setCarProperty({...car,[args.target.id]:args.target.value})
    }

    const Send=async ()=>{
       await fetch("http://localhost:4000/hirewheels/v1/vehicles",{
           method:"POST",
           body:JSON.stringify(car),
           headers:{
            "Content-type": "application/json; charset=UTF-8"
           }
       }).then(alert("Vehicle added successfully")).catch(err=>console.log("err"))
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

        <div style={{display:"flex", flexDirection:"row",  justifyContent:"space-evenly", alignItems:"center", border:"1px solid black", paddingTop:100, paddingBottom:100, paddingLeft:10, paddingRight:10 }}>
            <div >
            <label>Vehicle Type</label>
            <input placeholder="car/bike" id="vehicle_type" onChange={update}></input>
            </div >
            <div >
            <label>Vehicle Owner</label>
            <input placeholder="Owner" id="vehicle_owner" onChange={update}></input>
            </div>
            <div>
            <label>Vehicle Model</label>
            <input placeholder="Lamborgini" id="vehicle_model" onChange={update}></input>
            </div>
            <div>
            <label>Vehicle Number</label>
            <input placeholder="KA05-3421" id="vehicle_number" onChange={update}></input>
            </div>
            <div>
            <label>Vehicle Image Url</label>
            <input placeholder="car/bike" id="vehicle_img" onChange={update}></input>
            </div>
            <div>
            <label>Vehicle Fuel Type</label>
            <input placeholder="Petrol/Diesel" id="fuel_type" onChange={update}></input>
            </div>
            <div>
            <label>Vehicle Color</label>
            <input placeholder="Blue" id="color" onChange={update}></input>
            </div>
            <div>
            <label>Vehicle Price</label>
            <input placeholder="500rs" id="price" onChange={update}></input>
            </div>
        </div>

        <button style={{display:"flex",margin:"auto",justifyContent:"center",alignItems:"center", backgroundColor:"chartreuse", width:180, height:30, marginTop:10}} onClick={Send}>Submit</button>
       <Footer></Footer>
        </div>
    )
}
