const SetCar = (Car)=> dispatch=>{

    try{

        dispatch({
            type:"CAR",
            payload:Car
        })
    }
    catch{
        dispatch({
            type:"FAIL"
        })
    }


}
export default SetCar;