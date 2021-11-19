import React, {useEffect, useState} from "react";
import PatientCard from "./PatientCard";

const PatientsList = ({patients}) => {

  const [patientsData, setPatientsData] = useState([]);
  const error = null;

  useEffect(()=>{
    const fetchPatients = async () => {
      const result = await fetch(`http://localhost:8000/api/members`)
        .catch(error);
      const body = await result.json();
      setPatientsData(body);
    }

    fetchPatients();

  },[])
  

  

  return(
    <>
      {patientsData.map((patient, key) => (
        <PatientCard patient={patient}/>
        
      ))}
    </>
  )
};

export default PatientsList; 