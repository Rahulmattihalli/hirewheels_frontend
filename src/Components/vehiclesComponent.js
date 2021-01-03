import React from 'react'
import {useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import logo from './../images/philomath_logo.png'
import GetVehicles from './../actions/getvehicle'
export default function VehiclesComponent(props) {

    const dispatch = useDispatch();
    const Vehicles = useSelector(state=>state.GetVehilceReducer)

    const [cars, setCars] = useState([])
    const [carSelected, SelectCar] = useState({})

    useEffect(async () => {
      await dispatch(GetVehicles())
     if(Vehicles){
       Vehicles.then(data=>{if(data.data) data.data.then(data1=>{data1.map(car1=>{console.log(car1)})})})
     }
    }, [])

    useEffect(async () => {
       if(Vehicles){
         Vehicles.then(data=>{if(data.data) data.data.then(data1=>{ setCars(data1)})})
       }
      }, [Vehicles])

    return (

   

        <div style={{border:"2px solid black",height:30+"px",display:"flex", flexDirection:"column",  justifyContent:"space-around",alignItems:"center",overflowX: 'scroll',scrollBehavior:"smooth",marginTop:10,paddingTop:500}}>
           
           
          {cars.length==0? <div>Loading</div> : cars.map(data=>{

            return(
        <button key={data.vehicle_number} style={{marginTop:10}} onClick={()=>{SelectCar(data); props.carselect(data)}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center" , width:"500px"}}>
        
            <img src={data.vehicle_img} alt={data.vehicle_model} style={{width:200,height:150,margin:5+"em"}}></img>
            <div>
            <h3>Book This</h3>
            <h4>{data.vehicle_model}</h4>
            <h4>{data.vehicle_number}</h4>
            <h4>Vehicle:{data.vehicle_type}</h4>
            <h4>Color:{data.color}</h4>
            <h4>Fuel:{data.fuel_type}</h4>
            <h4>Price:{data.price}</h4>
            
        
            </div>
        </div>
        </button>

            )

          })}

          
        </div>
    )
}
