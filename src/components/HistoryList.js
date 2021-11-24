import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const HistoryList = ({patientGUID}) => {

  const id = patientGUID;
  const error = null;
  const [patientHistory, setPatientHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const result = await fetch(`http://localhost:8000/api/history/${id}`)
        .catch(error);
      const body = await result.json();
      setPatientHistory(body);
    }
    fetchHistory();
  }, [id])


  return(
    <>
      <div>
        This is the history for 
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Recepie</th>
            <th>PDF</th>
            <th>XML</th>
          </tr>
        </thead>
        <tbody>
          {patientHistory.map((appointment, key) => (
            <tr key={key}>
              <td>{appointment.appointment_id}</td>
              <td>{appointment.date} </td>
              <td>{appointment.type} </td>
              <td>{appointment.description}</td>
              <td>{appointment.recepieURL} </td>
              <td>{appointment.billPDF} </td>
              <td>{appointment.billXML} </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      
    </>
  )
};

export default HistoryList;