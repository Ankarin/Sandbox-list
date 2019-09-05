import React, { useState, useEffect } from "react";
import "./App.scss";
import List from "./List";
import AddItem from "./AddItem";
import TestMongo from './testMongo';
import axios from 'axios'

function App(props) {

  // Data base
  const [list, setList] = useState([



  ]);
  useEffect(()=> {
    axios.get('http://localhost:3001/list/')
        .then(response => {
          
          setList(response.data)
          
        })
        
        .catch((error) => {
          console.log(error);
        })
        
  }, [])


// Function to move elevemnts up and down array
  const move = (array, from, to,) => {
    const def = array[from];
    array[from] = array[to];
    array[to] = def;
    return array
}
  const addItem = message => {
    let currentIds = list.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    const newList = [...list, { id: idToBeAdded, message }];
    setList(newList);
  };
  const removeItem = (index, id) => {
   
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    let objIdToDelete = null;
    list.forEach(dat => {
      console.log(index)
      if (dat.id === index) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/list/"+list[index]._id, {
      data: {
        _id: objIdToDelete
      }
    });




  };
  // Move elements in array up and down
const Up = (id, array) => {
  const newList = [...list]
  // setList(newList)
   setList(move(newList, id, id-1))
   console.log(id)
  
}
const Down = (id, array) => {
  const newList = [...list]
  // setList(newList)
   setList(move(newList, id, id+1))
   console.log(id)
}






  return (
    <div className="app">
      <div className="list-item">
     
        {list.map((item, index) => (
          <div key={item._id}>
          <List
            
            index={item.id}
            id={list.indexOf(item)}
            item={item}
            removeItem={removeItem}
            Up={Up}
            Down={Down}
            list={list}
            addItem={addItem}
            
          /> 
          
          </div>
        ))}
        
        <AddItem addItem={addItem} />

        
      </div>
      
    </div>
  );
}

export default App;
