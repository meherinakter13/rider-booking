import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    const {id} = useParams();
    const history = useHistory();
    // Handle Booking 
    const handleBooking = (id) =>{
        history.push(`/booking/${id}`);
    }
    const [destination, setDestination] = useState({
        from: '',
        to: ''
    })
// Handle Blur
    const handleBlur = (e) => {
        const newDestinationInfo = { ...destination }
        newDestinationInfo[e.target.name] = e.target.value;
        setDestination(newDestinationInfo);
    }
    return (
        <div className="container ">
            <div className="row m-3">
                <div className="col-md-5 col-sm-12 ">
                    <div className="card bg-info shadow text-white" style={{width:'25rem',height:'25rem'}}>
                        <form className="p-3">
                            <label className="p-3">Pick from</label>
                            <input  onBlur={handleBlur} type="text" class="form-control" id="from" required></input>
                            <label className="p-3">Pick To</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="to"required></input>
                            <button className="btn btn-danger mt-3 w-100" onClick ={() =>handleBooking(id)}>Search</button>
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

export default Destination;