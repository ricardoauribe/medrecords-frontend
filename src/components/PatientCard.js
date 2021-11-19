import React from "react";
import { Card } from "react-bootstrap";

const PatientCard = ({patient}) => {
  return(
    <>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={"./avatar-man.png"} />
        <Card.Body>
          <Card.Title>{patient.name} {patient.lastname}</Card.Title>
          <Card.Text>
            {patient.age}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default PatientCard;