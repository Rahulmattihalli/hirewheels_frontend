import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import SetLocation from '../actions/setLocation';
import SetDateTime from '../actions/setDateTime';
export default function Datepicker(props) {



    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const dispatch = useDispatch();
    const update = (date)=>{
        props.setdatetime({pickup_datetime:startDate.toString(),dropoff_datetime:endDate.toString()})
    }

    return (
        <div>
            <div>
            <label>Pickup Date{" "}</label>
             <DatePicker onChange={(date)=>{setStartDate(date); update(date);}} />
    <label>{startDate.toString()}</label>
            </div>
            <div style={{marginTop:10}}>
            <label>Drop Date{" "}</label>
             <DatePicker  onChange={(date)=>{setEndDate(date); update(date);}}/>
             <label>{endDate.toString()}</label>
            </div> 
        </div>
    )
}
