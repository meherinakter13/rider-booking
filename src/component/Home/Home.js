import React, { useEffect, useState } from 'react';
import image from '../../images/Bg.png';
import'./Home.css';
import fakeData from '../../Data/fakeData.json';
import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    
    const [vehicles, setVehicles] = useState([]);
    useEffect(()=>{
        setVehicles(fakeData);
        console.log(fakeData);
    },[])
    return (
        <div style={{ backgroundImage: `url(${image})`}}className="header">
            <div className="row m-0">
                {
                   vehicles.map(vehicle =><div className="col-lg-3 col-md-6 col-sm-12 "><Vehicles vehicle={vehicle} key ={vehicle.vehicleName}></Vehicles></div>)
                }
            </div>
        </div>
    );
};

export default Home;