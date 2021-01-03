import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import SetLocation from '../actions/setLocation'
export default function Location(props) {
    
    const [location, setLocation] = useState({source_city:null, destination_city:null})

    const dispatch = useDispatch();

    const update=async (args)=>{
        await setLocation({...location,[args.target.id]:args.target.value})
        props.setLocation({...location,[args.target.id]:args.target.value})
    }
    return (
        <div>
            <label >{" "}Select source city{" "}</label>
            <select  id="source_city"  onChange={update}  >
<option value="" selected>Choose your City</option>
<option id="source" value="Bangalore" onSelect={update} onChange={update}>Bangalore</option>
<option  id="source" value="Mysore" onSelect={update} onChange={update}>Mysore</option>
<option  id="source" value="Mangalore" onSelect={update} onChange={update}>Mangalore</option>
</select>

<div style={{marginTop:10}}>
<label >{" "}Select Destination city{" "}</label>
            <select id="destination_city"  onChange={update}>
<option id="destination"  value="" selected>Choose your City</option>
<option id="destination" value="Bangalore">Bangalore</option>
<option id="destination" value="Mysore">Mysore</option>
<option id="destination" value="Mangalore">Mangalore</option>
</select>

</div>

        </div>
    )
}
