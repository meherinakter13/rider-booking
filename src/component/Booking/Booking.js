import {useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import fakeData from '../../Data/fakeData.json';
import GoogleMap from '../GoogleMap/GoogleMap';
import icon from'../../images/peopleicon.png';
const Booking = () => {
    const { id } = useParams();
    const [vehicleInfo, setVehicleInfo] = useState([]);
    useEffect(() => {
        setVehicleInfo(fakeData[id-1]) 
        
    }, [id])
    const {vehicleName, vehicleImage,vehicleSitType1,vehicleSitType2,vehicleSitType3,vehicleSitPrice1,vehicleSitPrice2,vehicleSitPrice3,from,to} = vehicleInfo;

    return (
        <div className="container ">
        <div className="row m-3">
            <div className="col-md-5  col-sm-12">
                <div className="card bg-info shadow text-white" style={{width:'25rem',height:'28rem'}}>
                    <form className="p-3">
                      <div className="mt-3">
                        <h5>From: {from} </h5>
                        <h5>To: {to} </h5>
                      </div>
                      <div className="border rounded mt-3 mb-3">
                        <img style={{ width: '100px' }} src={vehicleImage} alt="" />
                        <strong className="ml-3">{vehicleName}</strong>
                        <img className="ml-3 mr-2 " style={{ width: '40px' }} src="https://i.pinimg.com/originals/d1/f3/cc/d1f3ccc7e836617fb6e5db7fed1ae90b.png" alt=""/> <strong> {vehicleSitType1}</strong> <strong className="ml-5"> ${vehicleSitPrice1}</strong>
                      </div>
                      <div className="border rounded mt-3 mb-3">
                        <img style={{ width: '100px' }} src={vehicleImage} alt="" />
                        <strong className="ml-3">{vehicleName}</strong>
                        <img className="ml-3 mr-2 " style={{ width: '40px' }} src="https://i.pinimg.com/originals/d1/f3/cc/d1f3ccc7e836617fb6e5db7fed1ae90b.png" alt=""/> <strong>{vehicleSitType2}</strong> <strong className="ml-5"> ${vehicleSitPrice2}</strong>
                      </div>
                      <div className="border rounded mt-3 mb-3">
                        <img style={{ width: '100px' }} src={vehicleImage} alt="" />
                        <strong className="ml-3">{vehicleName}</strong>
                        <img className="ml-3 mr-2 " style={{ width: '40px' }} src="https://i.pinimg.com/originals/d1/f3/cc/d1f3ccc7e836617fb6e5db7fed1ae90b.png" alt=""/> <strong>{vehicleSitType3}</strong> <strong className="ml-5"> ${vehicleSitPrice3}</strong>
                      </div>
                    </form>
                </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-3">
                   <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>

    );
};

export default Booking;