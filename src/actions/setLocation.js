const SetLocation = (location)=>dispatch=>{

    try{
        dispatch({
            type:"LOCATION",
            payload:location
        })
    }
    catch(err){
        dispatch({
            type:"LOCATION_FAIL"
        })
    }


}
export default SetLocation;