import React,{ useState } from 'react';
import "./App.css";
import Students from './componets/Students';
import data from "./dataStudents.json";

function App() {
  const [items, setItem] = useState(data);

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Total Score</th>
            <th>Sex</th> 
          </tr>
        </thead>
        <tbody>
          {items.map((item)=>(
            <Students item={item}/>      
          ))} 
        </tbody>
     </table>
     </div> 
  );
}
export default App;