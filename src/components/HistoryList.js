import React, { useEffect, useState } from "react";

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
        This is the history for 
        {patientHistory.map((appointment, key) => (
          <p key={key}>{appointment.appointment_id} | {appointment.date} | {appointment.type} | {appointment.description}  | {appointment.recepieURL} | {appointment.billPDF} | {appointment.billXML}  </p>
        ))}
      </div>
      
    </>
  )
};

export default HistoryList;