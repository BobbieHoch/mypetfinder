import React from 'react';
import { useState } from "react";
import { Pet } from "../Models/pet";
import { PetCard } from "./PetCard";
import { Col, Row } from 'reactstrap';

// interface PetListProps{
//     pet:Pet[]
// }import { useState } from "react";


function PetList() {
    const [pets, setPets] = useState<Pet[]>([
        { name: "Ralph", breed: "Corgi", image: "/mypetfinder/public/dog1.jpg", isAdopted: (false) },
        { name: "Fido", breed: "Terrier", image: "/mypetfinder/public/dog2.jpg", isAdopted: (false) },
        { name: "Rex", breed: "mixed", image: "/mypetfinder/public/dog3.jpg", isAdopted: (false) },
        { name: "Sparky", breed: "lab", image: "/mypetfinder/public/dog4.jpg", isAdopted: (false) },
        { name: "Lou", breed: "Tabby", image: "/mypetfinder/public/cat1.jpg", isAdopted: (false) },
        { name: "Blue", breed: "Lynx", image: "/mypetfinder/public/cat2.jpg", isAdopted: (false) },
        { name: "Red", breed: "Siamese", image: "/mypetfinder/public/cat3.jpg", isAdopted: (false) },
        { name: "Green", breed: "Cheshire", image: "/mypetfinder/public/cat4.jpg", isAdopted: (false) }
    ])
    
    return (
        <div className="PetList">
            <Row>
                {pets.map((pet) => <Col lg='4'><PetCard pet={pet} /></Col>)}
            </Row>
        </div>
    )
}
export default PetList