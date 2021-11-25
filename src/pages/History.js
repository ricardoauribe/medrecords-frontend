import React, { useEffect, useState } from "react";
import HistoryList from "../components/HistoryList";
import { Badge } from "react-bootstrap";

const History = ({match}) => {

  const patientId = match.params.id;
  const error = null;
  const [patientData, setPatientData] = useState({"_id":"","guid":"","name":"","lastname":"","age":0,"sex":""}); 

  useEffect(() => {
    const fetchPatientData = async () => {
      const result = await fetch(`http://localhost:8000/api/member/${patientId}`)
        .catch(error);
      const body = await result.json();
      setPatientData(body);
    }

    fetchPatientData();

  }, [patientId])

  return(
    <>
      <div style={{textAlign: 'left', padding: 20}}>
        <h1>Medical History</h1>
        <h3>{patientData.name} {patientData.lastname}</h3>
        <Badge pill bg="info" style={{marginRight: 5}}>Age: {patientData.age}</Badge>
        <Badge pill bg="info" style={{marginRight: 5}}>Gender: {patientData.sex}</Badge>
        <br/>
        <br/>
        <h3>Past Appointments</h3>
        <HistoryList patientGUID={patientData.guid}/>
      </div>
    </>
  )
};

export default History;