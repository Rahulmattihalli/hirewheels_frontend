const SetDateTime = (Datetime)=> dispatch=>{

    try{
        console.log(Datetime)
        dispatch({
            type:"DATETIME",
            payload:Datetime
        })
    }
    catch{
        dispatch({
            type:"FAIL"
        })
    }


}
export default SetDateTime;