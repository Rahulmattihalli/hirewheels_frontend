import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {Switch, Route , NavLink, Redirect} from 'react-router-dom'
import Authpage from './Components/Authpage';
import Booking from './Components/booking';
import admin from './Components/admin';
import applogo from './images/philomath_logo.png'
import {FaUser} from 'react-icons/fa'
import Signin from './Components/signin';
import Drivebooking from './drivebooking';
import { useSelector } from 'react-redux';
import AddVehicle from './Components/addVehicle';


function App() {

  const state = useSelector(state=>state.LoginReducer)
  const [isAdmin, setRole] = useState(false)


  state.then(data=>setRole(data.isAdmin))
  console.log(isAdmin)

  return (
    <div className="App">


   <Switch>
    <Route path={"/"} exact component={Authpage}></Route>
    <Route path={"/booking"} exact component={Booking}></Route>
    <Route path={"/signin"} exact component={Signin}></Route>
    {isAdmin == true &&  <Route path={"/admin"} exact component={admin}></Route>}
    <Route path={"/bookaride"} exact component={Drivebooking}></Route>
    {isAdmin == true && <Route path={"/addvehicle"} exact component={AddVehicle}></Route>}
    <Redirect to={"/"}></Redirect>
   </Switch>
    </div>
  );
}

export default App;
