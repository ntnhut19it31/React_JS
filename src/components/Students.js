import React from "react";

const Students = ({ item }) => {
  return (
    <tr>
        <td><input type="checkbox" ></input></td> 
        <td>{item.id}</td>
        <td>{item.FullName}</td>
        <td>{item.age}</td>
        <td>{item.class}</td>
        <td>{item.TotalScore}</td>
        <td>{item.sex}</td>
    </tr>    
  );
};
export default Students;