import React from "react";
import { Card } from "react-bootstrap";

const PatientCard = ({patient}) => {
  return(
    <>
      <Card style={{ width: '18rem'}}>
        {
          (patient.sex == "male") 
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
        </Card.Body>
      </Card>
    </>
  )
}

export default PatientCard;