import React from 'react'
import {useState, Button} from 'react'
import applogo from './../images/philomath_logo.png'
import {FaUser} from 'react-icons/fa'
import {Switch, Route, NavLink} from 'react-router-dom'
import SignupModal from './SignupModal'
import {Modal} from 'react-bootstrap'
import booking from './booking'
import Footer from './footer'

export default function Authpage(props) {
console.log(props)
    const [show, setstate] = useState(false)
    const showModal=()=>{
       
    }


    return (
        <div>

<nav className="Navigationbar">
  <div className="firstdiv" >
<img src={applogo} style={{height:50,width:50}}></img>
<h3>Hire Wheels</h3>
  </div>

  <div className="seconddiv" >
    <div className="seconddiv" style={{padding:1}} onClick={showModal}>
<FaUser/>
<NavLink to={"/signin"}>Sign in</NavLink>
</div>
  </div>
  
</nav>
<div className="body">
<Switch>
    <Route path="/signin"  exact component={booking}></Route>
    <Route path="/"  exact component={SignupModal}></Route>
</Switch>
</div>

           
        </div>
    )
}
