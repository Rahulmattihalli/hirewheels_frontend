const defaultState ={
    source_city:null,
    destination_city:null
}
const LocationReducer = (state=defaultState,action)=>{

    switch(action.type){
        case "LOCATION":
            return {...defaultState,source_city:action.payload.source_city, destination_city:action.payload.destination_city}
        default:
                return defaultState;
    }

}
export default LocationReducer;