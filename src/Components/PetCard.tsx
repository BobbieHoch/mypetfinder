import { prependListener } from 'process';
import React from 'react';
import {Pet}from "../Models/pet"
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'


interface PetCardProps {
    pet: Pet
}
export function PetCard(props: PetCardProps) {
    
    return (
        <div className="PetCard">
            <Card style={{width: '18rem' }}>

  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  </div>
      
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
        </Card>

        <div>
            <img src={`/${'props.pet.image'}`}></img>
            <p>{props.pet.name}</p>
            <p>{props.pet.breed}</p>
           <button onClick = {() => isAdopted()}>
                Adopt Me!</button>  {isAdopted ? <p> Found a Forever Home!</p> :
                    
        </div>
    )
}
export default PetCard;