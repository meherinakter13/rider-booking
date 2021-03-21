import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Vehicles = (props) => {
    const{id,vehicleName, vehicleImage} = props.vehicle;
    const history = useHistory();
    const handleDestination = (vehicleName,id) =>{
        history.push(`/destination/${vehicleName}/${id}`);
    }
    return (
        <div onClick={() => handleDestination(vehicleName,id)} className="container m-auto" style={{cursor:'pointer'}}>
            <Container>
            <Card style={{ width: '16rem', height: '22rem'}}>
                <Card.Img className="w-100 h-75 "variant="top" src={vehicleImage} />
                <Card.Body>
                    <Card.Title className="text-center">{ vehicleName}</Card.Title>
                </Card.Body>
                <Button onClick={() => handleDestination(vehicleName,id)}className="mb-1" variant="info">Take a ride</Button>
                </Card>
            </Container>
        </div>
    );
};

export default Vehicles;