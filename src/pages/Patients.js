import React from "react";
import PatientsList from "../components/PatientsList";

const Patients = () => {
  return(
    <>
      <h1>
        Patients
      </h1>
      <p>
        Information about current members/patients
      </p>
      <PatientsList />
    </>
  )
}

export default Patients;