import React, { useState } from "react";

export default function AddNestedItem({ addNestedItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addNestedItem(value);
    setValue("");
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
