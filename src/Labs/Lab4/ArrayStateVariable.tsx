import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success rounded">Add Element</button>
      <ul className="list-group w-100">
        {array.map((item, index) => (
          <li className="list-group-item text-dark" key={index}>
            <h2>{item}</h2>
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click" className="btn btn-danger rounded d-flex align-content-end">
              Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
