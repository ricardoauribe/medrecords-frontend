import React, { useEffect, useState } from "react";
import { Table, Badge } from "react-bootstrap";
import { FaFilePdf, FaFileCode, FaFilePrescription } from "react-icons/fa";

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
              <td><Badge pill bg="info">{appointment.type} </Badge></td>
              <td>{appointment.description}</td>
              <td style={{textAlign: "center"}}><a href={appointment.recepieURL} target="blank"> <FaFilePrescription /> </a></td>
              <td style={{textAlign: "center"}}><a href={appointment.billPDF} target="blank"> <FaFilePdf /> </a></td>
              <td style={{textAlign: "center"}}><a href={appointment.billXML} target="blank"> <FaFileCode /> </a></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      <p>TODO: Add different color tags according to the type of appointment</p>
    </>
  )
};

export default HistoryList;