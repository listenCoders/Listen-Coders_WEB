import React from 'react';
import './Assignment2Result.css';
// import Assignment1 from "../../AssignmentsJson/FreeBatch1Assignment/Assignment1.json";
import Assignment3 from "../../AssignmentsJson/FreeBatch2Assignment/Assignment3.json"
import { Table } from "react-bootstrap";

const Assignment2Result = () => {
  return (
    <div className="container mt-5 mb-5">      
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Student Name</th>
                <th>Marks</th>
                <th>Feet Back</th>
              </tr>
            </thead>
            <tbody>
              {Assignment3.map((st) => {
                return (
                  <tr style={{lineHeight:"50px"}}>
                    <td id='img_name'><img src={st.img} alt="" width={60} height={60} style={{borderRadius:"50%", margin:"auto"}} /></td>
                    <td > <b>{st.name}</b>  </td>
                    <td>{st.mark}</td>
                    <td>{st.feetBack}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
  );
};

export default Assignment2Result;