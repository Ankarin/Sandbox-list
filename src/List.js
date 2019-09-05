import React, { useState } from "react";
import AddNestedItem from "./AddNestedItem";
import './App.scss'
export default function List({ item, index, id, removeItem, Up, Down, list }) {
    // Toggle form for adding new list item
  const [form, setForm] = useState(false);

  const [nestedList, setNestedList] = useState([])

  const move = (array, from, to,) => {
    const def = array[from];
    array[from] = array[to];
    array[to] = def;
    return array
}



  const addNestedItem = text => {
    let currentIds = nestedList.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    const newList = [...nestedList, { id: idToBeAdded, text }];
    setNestedList(newList);
  };

  const removeNestedItem = index => {
    const newList = [...nestedList];
    newList.splice(index, 1);
    setNestedList(newList);
  };




  // Move elements in array up and down
const UpNested = (id, array) => {
  const newList = [...nestedList]
  // setList(newList)
   setNestedList(move(newList, id, id-1))
  
}
const DownNested = (id, array) => {
  const newList = [...nestedList]
  // setList(newList)
   setNestedList(move(newList, id, id+1))

}




// console.log(nestedList.map(a=>a.text))
return (
    <div >
      
        
        {item.text}
        <br/>
         <button onClick={() => removeItem(id)}>Remove</button>{" "}
       <button onClick={() => setForm(!form)}>Add Sublist</button>
        
        { id!==0?<button onClick={()=>Up(id, nestedList)} >Up</button>:null} 
{id!==list.length-1 ?<button onClick={()=>Down(id, nestedList)}>Down</button>:null}
{nestedList.length >0 ?<button onClick={()=>setNestedList([])}>Remove Sublist</button>:null}


       
      {/* {item.nested.text} */}
     
<ul> 

{nestedList.length>0 ? nestedList.map((item, index)=> 
  <li key={item.id}>
 <List 
 
 item={item} 
 index={item.id} 
 id={nestedList.indexOf(item)}
 indexof={nestedList.indexOf(item)}
  removeItem={removeNestedItem} 
  Up={UpNested}
 Down={DownNested} 
   list={nestedList}/> </li>  ):null}


{form ? <AddNestedItem  addNestedItem={addNestedItem}/> : ""}
</ul>







 {/*nestedList.length>=0 ? nestedList.map(a=><li>{a.text}</li>):null} 



 
     {/* <li> <ul>{Array.isArray(item.nested) ? <List item={item.nested.map(a=>a)} index={index} id={id} removeItem={removeItem} Up={Up} Down={Down} list={list} />:null}</ul>  </li>  */}

      
      <div />
    </div>
  );
  
}
