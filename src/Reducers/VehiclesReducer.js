const defaultState = {
    loading:false,
    data:null,
    errorMsg:null
}
const GetVehiclesReducer = async (state=defaultState,action)=>{

    switch(action.type){
        case "GET_VEHICLES_INITIATED":
            return {...state,loading:true}
        case "GET_VEHICLES_SUCCESS":
            return {...state,loading:false,data:action.payload}
        case "GET_VEHICLES_FAIL":
            return {...state,loading:false,errorMsg:"Something Went wrong"}

        default:
            return state;
    }
}
export default GetVehiclesReducer;