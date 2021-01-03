const DefaultState = {
    loading:false,
    data:null,
    isAdmin:null,
    email:null,
    errorMsg:""
}
const LoginReducer = async (state=DefaultState, action)=>{
var token = null;
var isAdmin = null;
var email=null;
    switch(action.type){
        default:
            return state;
            case "LOGIN_INITIATED":
                return {...state,
                loading:true}
            
            case "LOGIN_SUCCESS":
            
                   await action.payload.then(data=>{token=data["token"]; isAdmin=data["isAdmin"]; email = data["email"]})
                    return {...state, loading:false, data:token, isAdmin:isAdmin, email:email}
            
            case "LOGIN_FAIL":
                    return {...state, loading:false, errorMsg:"Failed to login"}
                
                
    }

}
export default LoginReducer;