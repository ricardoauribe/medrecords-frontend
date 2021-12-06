import React from "react";
import { Card, Button } from "react-bootstrap";

const PatientCard = ({patient}) => {

  return(
    <>
      <Card style={{ width: '18rem'}}>
        {
          (patient.sex === "male") 
            ?<Card.Img variant="top" src={"./avatar-man.png"} />
            :<Card.Img variant="top" src={"./avatar-woman.png"} />
        }
        
        <Card.Body>
          <Card.Title>{patient.name} {patient.lastname}</Card.Title>
          <Card.Text>
            {patient.age}
            <br/>
            {patient.sex}
          </Card.Text>
          <Button variant="primary" href={`/patients/history/${patient.guid}`}>Medical History</Button>
        </Card.Body>
      </Card>
    </>
  )
}
//TODO: Add kids banner
export default PatientCard;