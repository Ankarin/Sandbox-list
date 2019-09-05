import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function TestMongo() {
  const [value, setValue] = useState("");


const [state, setState] = useState([])
useEffect(()=> {
    axios.get('http://localhost:3001/list/')
        .then(response => {
          
          setState(response.data)
          
        })
        
        .catch((error) => {
          console.log(error);
        })
        
  }, [])
 
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    
    setValue("");

   

    axios.post("http://localhost:3001/list/add", { 
    message: value
    });


  };
  console.log(state.map(data =>data.message))

    return (
        <div>
        
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />{" "}
        <button onClick={handleSubmit}>Add</button>{" "}
        
        {Array.isArray(state) ? state.map(item=><li key={item._id}>{item.message}</li>):null}

        </div>
    )
}
