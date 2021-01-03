export const Login = (user) => async dispatch=>{

    try{

        dispatch({
            type:"LOGIN_INITIATED"
        })

        const login_result = await fetch("http://localhost:4000/hirewheels/v1/users/access-token",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
           

        })
       
         dispatch({
            
          type:"LOGIN_SUCCESS",
          payload:login_result.json()    
        })
    
    }
    catch(err){
        dispatch({
            type:"LOGIN_FAIL"
        })

    }

}