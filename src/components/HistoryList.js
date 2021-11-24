import React, { useEffect, useState } from "react";

const HistoryList = ({patientGUID}) => {

  const error = null;
  const [patientHistory, setPatientHistory] = useState({ appointments: [] });

  useEffect(() => {
    const fetchHistory = async () => {
      const result = await fetch(`http://localhost:8000/api/history/AAAAA`)
        .catch(error);
      const body = await result.json();
      setPatientHistory(body);
      console.log(patientHistory);
    }
    fetchHistory();
  }, [])


  return(
    <>
      <div>
        This is the history for 
        {patientHistory.appointments}
      </div>
      
    </>
  )
};

export default HistoryList;