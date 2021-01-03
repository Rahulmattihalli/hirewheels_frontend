const GetVehicles = ()=> async dispatch=>{

    try{

        dispatch({
            type:"GET_VEHICLES_INITIATED"
        })

        const vehicles=await fetch("http://localhost:4000/hirewheels/v1/vehicles",{
            method:"GET",
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        await dispatch({
            type:"GET_VEHICLES_SUCCESS",
            payload:vehicles.json()
        })

    }catch(err){
        await dispatch({
            type:"FAIL"
        })
    }




}
export default GetVehicles;