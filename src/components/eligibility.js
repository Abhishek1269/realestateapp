import React, { useContext } from 'react';
import PropertyContext from './PropertyContext';

const Eligibility = () => {
  const { 
    selectedProperty, 
    income, 
    cibilScore, 
    tenure, 
    minimumSalary, 
    eligibilityMessage,
    handleIncomeChange, 
    handleCibilScoreChange, 
    handleTenureChange, 
    handleSubmit 
  } = useContext(PropertyContext);

  return (
    <div className="container my-5">
      {selectedProperty ? (
        <>
          <div className="card text-dark mx-auto" style={{ width: '18rem', border: '2px solid', borderRadius: '10px' }}>
            <div className='d-flex justify-content-center align-content-center p-3'>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/${selectedProperty.img}`} 
              className="card-img-top" 
              alt={selectedProperty.title} 
              style={{width: '250px', height: '250px', border: '3px solid', borderRadius: '10px'}} 
            />
            </div>
            <div className="card-body text-center">
              <h2 className="card-title my-3">{selectedProperty.title}</h2>
              <p className="card-text lead">Price: {selectedProperty.price}</p>
              <p className="card-text">Downpayment: Rs.{selectedProperty.downpayment}</p>
              <p className="card-text">Loan Amount: Rs.{selectedProperty.loanAmount}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="my-4 p-5" style={{border: '2px solid', borderRadius: '10px'}}>
            <div className="form-group">
              <label htmlFor="income">Income</label>
              <input type="text" className="form-control" id="income" value={income} onChange={handleIncomeChange} />
            </div>
            <div className="form-group">
              <label htmlFor="cibilScore">CIBIL Score</label>
              <input type="text" className="form-control" id="cibilScore" value={cibilScore} onChange={handleCibilScoreChange} />
            </div>
            <div className="form-group">
              <label htmlFor="tenure">Tenure (in years)</label>
              <input type="text" className="form-control" id="tenure" value={tenure} onChange={handleTenureChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          {eligibilityMessage && (
            <div className="alert alert-info">
              {eligibilityMessage}
            </div>
          )}
        </>
      ) : (
        <p className="text-center">No property selected. Please go back and select a property.</p>
      )}
    </div>
  );
};

export default Eligibility;