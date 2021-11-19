import React from "react";

const PatientCard = ({patient}) => {
  return(
    <>
      <p><b>{patient.name}</b></p>
      {patient.age}
    </>
  )
}

export default PatientCard;