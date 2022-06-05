import React from 'react';
import './Assignment1Result.css';
// import Assignment1 from "../../AssignmentsJson/FreeBatch1Assignment/Assignment1.json";
import Assignment1 from "../../AssignmentsJson/FreeBatch2Assignment/Assignment2.json"
import { Table } from "react-bootstrap";

const Assignment1Result = () => {
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
              {Assignment1.map((st) => {
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

export default Assignment1Result;