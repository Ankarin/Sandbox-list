import React, { useState } from "react";
import "./App.scss";
import List from "./List";
import AddItem from "./AddItem";


function App(props) {

  // Data base
  const [list, setList] = useState([
  {id:0,
    text:'random content',
    nested:[{
      text:'nested content'
    }

    ]

  },


  ]);

// Function to move elevemnts up and down array
  const move = (array, from, to,) => {
    const def = array[from];
    array[from] = array[to];
    array[to] = def;
    return array
}



  const addItem = text => {
    let currentIds = list.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    const newList = [...list, { id: idToBeAdded, text }];
    setList(newList);
  };

  const removeItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };




  // Move elements in array up and down
const Up = (id, array) => {
  const newList = [...list]
  // setList(newList)
   setList(move(newList, id, id-1))
  
}
const Down = (id, array) => {
  const newList = [...list]
  // setList(newList)
   setList(move(newList, id, id+1))

}




  return (
    <div className="app">
      <div className="list-item">
        {list.map((item, index) => (
          <div key={index}>
          <List
            key={index}
            index={index}
            id={list.indexOf(item)}
            item={item}
            removeItem={removeItem}
            Up={Up}
            Down={Down}
            list={list}
            addItem={addItem}
            
          /> 
          {/* <AddItem addItem={addItem} nestedList={nestedList} /> */}
          </div>
        ))}
        <br />
        <AddItem addItem={addItem} />

        
      </div>
    </div>
  );
}

export default App;
