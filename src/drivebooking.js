import React from 'react'
import {useState} from 'react'
import applogo from './images/philomath_logo.png'
import {FaUser} from 'react-icons/fa'
import {Switch, Route, NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Booking from './Components/booking';
import Location from './Components/location'
import Datepicker from './Components/datepicker'
import VehiclesComponent from './Components/vehiclesComponent';
import { useSelector } from 'react-redux';
import Footer from './Components/footer'
export default function Drivebooking(props) {
    const user = useSelector(state => state.LoginReducer);
    const [location, setLocation] = useState({source_city:null, destination_city:null})
    const [datetime, setDateTime] = useState({pickup_datetime:null, dropoff_datetime:null})
    const [finalcar, SelectCar] = useState({})
    const [errormsg, setError] = useState("")
   const [userrole, setUser] = useState(null)
   if(user){
       user.then(data=>setUser(data))
   }
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        backButton: {
          marginRight: theme.spacing(1),
        },
        instructions: {
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(5),
          marginLeft: theme.spacing(1)
        },
      }));


      function getSteps() {
        return ['select source location and drop location', 'select pickup and drop date & time', 'Select the vehicle', 'Confirm booking'];
      }
      
      function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return <Location setLocation={setLocation}></Location>;
          case 1:
            console.log({location})
            return <Datepicker setdatetime={setDateTime}></Datepicker>;

          case 2:
            console.log({location})
            console.log({datetime})
            return <VehiclesComponent carselect={SelectCar}></VehiclesComponent>;

            case 3:
                console.log({location})
                console.log({datetime})
                console.log({finalcar})

            return <div style={{display:"flex",flexDirection:"column", height:60+"vh",justifyContent:"center",alignItems:"center",border:"1px black solid", overflowX:"scroll"}}>
                <h1>Final Confirmation</h1>
                <img src={finalcar.vehicle_img} style={{width:200,height:200}}></img>
        <h3>Source City: {location.source_city}</h3>
        <h3>Destination City: {location.destination_city}</h3>
        <h3>Pickup Date:{datetime.pickup_datetime}</h3>
        <h3>Dropoff Date:{datetime.dropoff_datetime}</h3>
        <h4>Fare:{finalcar.price}</h4>
            </div>

          default:
            return 'Unknown stepIndex';
        }
      }


      const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if(activeStep==0){
        if(location.source_city==null){
          setError("Please select the source and destination city")
        }
        else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setError("")}
    }
    else
    {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setError("")
        }

    

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const book= async()=>{
    await fetch("http://localhost:4000/hirewheels/v1/bookings",{
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
        method:"POST",
        body:JSON.stringify({
            user_email:userrole.email,
            source_city:location.source_city,
            destination_city:location.destination_city,
            vehicle:finalcar.vehicle_number,
            fare:finalcar.price,
            pickup_datetime:datetime.pickup_datetime,
            dropoff_datetime:datetime.dropoff_datetime
        })
    }).then(resp=>{if(resp.status==200) alert("Successfully booked")}).catch((err)=>{alert(err)})
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

        <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>{book()}</Typography>
            <Button onClick={()=>{props.history.push("/")}}>Go Home</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
            {errormsg}
          </div>
        )}
      </div>
    </div>
 

        </div>
    )
}
