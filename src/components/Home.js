import React from 'react'
import { Link } from 'react-router-dom';
import Homedata from './data/homedata.json'

export default function home() {
  return (
    <div className='container home my-3' id='home'>
      <div className='row d-flex justify-content-center align-content-center' data-aos="zoom-in" data-aos-duration="2000">
        {Homedata.map((data) => (
          <div key={data.id} className="my-12 col-sm-6 col-md-4 mx-4 mt-5">
            <Link to={`/${data.route}`} className="card text-dark" style={{ width: '18rem', textDecoration: 'none', border: '2px solid' }}>
              <div className='d-flex justify-content-center align-content-center p-3'>
                <img src={`${process.env.PUBLIC_URL}/assets/${data.img}`} className="card-img-top" alt="" style={{ width: '250px', height: '250px', transition: 'transform 0.3s ease', border: '3px solid', borderRadius: '10px'}} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">{data.title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
