import React, { useState } from "react";
import axios from 'axios'
export default function AddItem({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");


    axios.post("http://localhost:3001/list/add", { 
      message: value
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />{" "}
        <button onClick={handleSubmit}>Add</button>{" "}
      </p>
    </form>
  );
}
