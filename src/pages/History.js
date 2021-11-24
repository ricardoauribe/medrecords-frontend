import React, { useEffect, useState } from "react";
import HistoryList from "../components/HistoryList";

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
        <h1>Medical History for {patientData.name} {patientData.lastname}</h1>
        <p>Age: {patientData.age}</p>
        <p>Age: {patientData.sex}</p>

        <h3>Past Appointments</h3>
        <HistoryList patientGUID={patientData.guid}/>
      </div>
    </>
  )
};

export default History;