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
      <p>
        Placeholder for component to search patients
      </p>
      <p>
        Placeholder for component table to show patients. Table should show Name, age, link to medical history
      </p>
      <PatientsList />
    </>
  )
}

export default Patients;