import React from 'react'
import {Modal} from 'react-bootstrap'
import './../App.css'
import {useState} from 'react'
import Footer from './footer'
export default function SignupModal() {

    const [user, setUser] = useState({firstname:null, lastname:null, email:null,password:null,phone:null})

const update=async (args)=>{
console.log(args.target.value)
    await setUser({...user,[args.target.id]:args.target.value})
    await console.log(user)
}

const submit= async ( )=>{
    console.log(user)
    await fetch("http://localhost:4000/hirewheels/v1/users",{
        method:"POST",
        body:JSON.stringify(user),
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }).then((resp)=>{  if(resp.status==200) alert("Successfully registered")}).catch(err=>{ alert("Failed")})

}

    return (
        <div>
 <div className="body">

                
<div className="signInBox">
<div><h3>SIGN UP HERE</h3></div>
   
        <div>
        <label >FirstName: {" "}</label>
        <input type="text" style={{height:25, width:100+"%"}}  onChange={(e)=>update(e)} id={"firstname"}></input>
            </div>
            <div>
        <label >LastName: {" "}</label>
        <input type="text" style={{height:25, width:100+"%"}} onChange={update} id={"lastname"}></input>
            </div>
            <div>
            <label>Email: {"  "}</label>
        <input type="text" style={{height:25, width:100+"%"}} onChange={update} id={"email"}></input>
            </div>
            <div>
            <label>Password: {"  "}</label>
        <input type="password" style={{height:25, width:100+"%"}} onChange={update} id={"password"}></input>
            </div>
            <div>
            <label>Phone: {"  "}</label>
        <input type="text" style={{height:25, width:100+"%"}} onChange={update} id={"phone"}></input>
            </div>
            <div>
       
        </div>
        <button  type="submit" onClick={submit}>Signup</button>
</div>

</div>

</div>
       
    )
}
