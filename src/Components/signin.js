import React from 'react'
import {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import applogo from './../images/philomath_logo.png'
import {FaUser} from 'react-icons/fa'
import {Switch, Route, NavLink} from 'react-router-dom'
import SignupModal from './SignupModal'
import {Modal} from 'react-bootstrap'
import booking from './booking'
import './../App.css'
import {Login} from './../actions/signinaction'
import Footer from './footer'
export default function Signin(props) {


    const [user, setUser] = useState({email:null,password:null})

    const dispatch = useDispatch();
    const state = useSelector(state => state.LoginReducer);
   if(state){
    state.then(data=>{
       if(data.data!=null){
           if(data.isAdmin){
            props.history.push("/admin")
           }
           else
        props.history.push("/booking")
       }
   })}

    const login = async ()=>{
        if(user.email!=null && user.password!=null)
       {
           console.log("Calling dispatcher")
           await dispatch(Login(user))
           
       }
        
    }
    const update = (args)=>{
        setUser({...user,[args.target.id]:args.target.value})
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
<NavLink to={"/"}>Sign up</NavLink>
</div>
  </div>
  
</nav>
            <div className="body">

                
                <div className="signInBox">
                <div><h3>SIGN IN HERE</h3></div>
                   
                        <div>
                        <label >Username: {" "}</label>
                        <input type="text" style={{height:25, width:100+"%"}} onChange={update} id={"email"}></input>
                            </div>
                            <div>
                            <label>Password: {"  "}</label>
                        <input type="password" style={{height:25, width:100+"%"}} onChange={update} id={"password"}></input>
                            </div>
                            <div>
                        <button type="submit" onClick={()=>{login()}}>Login</button>
                        </div>
                    
                </div>
            </div>
           
        </div>
    )
}
