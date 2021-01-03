import {combineReducers} from 'redux';
import DateTimeReducer from './Reducers/DateTimeReducer';
import LocationReducer from './Reducers/locationReducer';
import LoginReducer from './Reducers/LoginReducer';
import VehicleReducer from './Reducers/VehicleReducer';
import GetVehiclesReducer from './Reducers/VehiclesReducer';

const RootReducer = combineReducers({
 LoginReducer:LoginReducer,
 GetVehilceReducer:GetVehiclesReducer,
 LocationReducer:LocationReducer,
 DateTimeReducer:DateTimeReducer,
 VehicleReducer:VehicleReducer
});

export default RootReducer;