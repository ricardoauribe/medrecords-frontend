import React, { useEffect, useState } from "react";

const History = ({match}) => {

  const patientId = match.params.id;
  console.log(patientId);
  const error = null;
  const [patientData, setPatientData] = useState({"_id":"","guid":"","name":"","lastname":"","age":0,"sex":""}); 

  useEffect(() => {
    const fetchPatientData = async () => {
      const result = await fetch(`http://localhost:8000/api/member/${patientId}`)
        .catch(error);
      const body = await result.json();
      console.log(body);
      setPatientData(body);
    }

    fetchPatientData();

  }, [patientId])

  return(
    <>
      <h1>History for patient</h1>
      {patientData.name}
    </>
  )
};

export default History;