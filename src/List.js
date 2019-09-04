import React, { useState } from "react";
import AddItem from "./AddItem";
import './App.scss'
export default function List({ item, index, id, removeItem, Up, Down, list }) {
  const [form, setForm] = useState(false);
// if(item.nested) {
//   console.log(item.nested.map(a=>a.text))
// }
console.log(item.nested)
return (
    <div >
      
        
        {item.text}
        <br/>
         <button onClick={() => removeItem(index)}>Remove</button>{" "}
        <button onClick={() => setForm(!form)}>Add nested list</button>
      
        { id!==0?<button onClick={()=>Up(id, item)} >Up</button>:null} 
        {id!==list.length-1 ?<button onClick={()=>Down(id, item)}>Down</button>:null}
<button>show</button>


       
      {/* {item.nested.text} */}
     
<ul> 

 


{form ? <AddItem /> : ""}
</ul>

<ul>
<li> {Array.
  
  isArray(item.nested) ? item.nested.map((item, index) => (
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
            
          /> 
          {/* <AddItem addItem={addItem} nestedList={nestedList} /> */}
          </div>
        )) :null}
        </li>
        </ul>
     {/* <li> <ul>{Array.isArray(item.nested) ? <List item={item.nested.map(a=>a)} index={index} id={id} removeItem={removeItem} Up={Up} Down={Down} list={list} />:null}</ul>  </li>  */}

      
      <div />
    </div>
  );
  
}
