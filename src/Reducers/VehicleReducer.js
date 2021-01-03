const defaultState ={
    vehicle:null,
    fare:null
}
const VehicleReducer = (state=defaultState,action)=>{

    switch(action.type){
      case "CAR":
                return {...defaultState,vehicle:action.payload.vehicle_number,fare:action.payload.fare }
        default:
                return defaultState;
    }

}
export default VehicleReducer;