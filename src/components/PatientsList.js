import React, {useEffect, useState} from "react";
import PatientCard from "./PatientCard";
import { Container, Row, Col } from "react-bootstrap";

const PatientsList = ({patients}) => {

  const [patientsData, setPatientsData] = useState([]);
  const error = null;

  //Using fetch data to 
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
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Row>
          {patientsData.map((patient, key) => (
            <Col key={key} style={{ justifyContent: 'flex-end'}}>
              <PatientCard key={key} patient={patient}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
};

export default PatientsList; 