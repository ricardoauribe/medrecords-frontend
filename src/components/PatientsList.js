import React from "react";


const PatientsList = ({patients}) => {
  return(
    <>
      {patients.map((patient, key) => (
        <p>{patient.name} {patient.lastname}</p>
      ))}
    </>
  )
};

export default PatientsList; 