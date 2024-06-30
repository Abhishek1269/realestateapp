import React, { useContext } from 'react';
import apartmentData from './data/apartmentdata.json';
import {useNavigate } from 'react-router-dom';
import PropertyContext from './PropertyContext';

const Apartment = () => {
  const { selectProperty } = useContext(PropertyContext);
  const navigate = useNavigate();

  const handleCheckEligibility = (property) => {
    selectProperty(property);
    navigate('/eligibility');
  };

  return (
    <div className='container my-3'>
      <h1>APARTMENTS</h1>
      <div className='row d-flex justify-content-center align-content-center'>
        {apartmentData.map((data) => (
          <div key={data.id} className="my-12 col-sm-6 col-md-4 mx-4 mt-5" data-aos="flip-left" data-aos-duration="2000">
            <div className="card text-dark" style={{ width: '18rem', border: '2px solid', borderRadius: '10px' }}>
              <div className='d-flex justify-content-center align-content-center p-3'>
                <img src={`${process.env.PUBLIC_URL}/assets/${data.img}`} className="card-img-top" alt="" style={{ width: '250px', height: '250px', border: '3px solid', borderRadius: '10px' }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.info}</p>
                <p className="card-text">Rs.{data.price}</p>
                <button className="btn btn-primary" onClick={() => handleCheckEligibility(data)}>Check Eligibility</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartment;