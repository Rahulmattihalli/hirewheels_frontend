const defaultState ={
    pickup_datetime:null,
    dropoff_datetime:null
}
const DateTimeReducer = (state=defaultState,action)=>{

    switch(action.type){
      case "DATETIME":
            return {...defaultState,pickup_datetime:action.payload.pickup_datetime,dropoff_datetime:action.payload.dropoff_datetime }
        default:
                return defaultState;
    }

}
export default DateTimeReducer;