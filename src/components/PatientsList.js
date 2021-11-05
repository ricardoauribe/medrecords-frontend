import React, {useState} from "react";





const PatientsList = ({patients}) => {

  const [patientsData, setPatientsData] = useState([]);
  const error = null;

  const fetchPatients = async () => {
    const result = await fetch(`http://localhost:8000/api/members`)
      .catch(error);
    const body = await result.json();
    setPatientsData(body);
  }

  fetchPatients();

  return(
    <>
      {patientsData.map((patient, key) => (
        <p>{patient.name} {patient.lastname}</p>
      ))}
    </>
  )
};

export default PatientsList; 