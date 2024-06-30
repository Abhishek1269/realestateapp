import React, { createContext, useState, useMemo } from 'react';

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [income, setIncome] = useState('');
  const [cibilScore, setCibilScore] = useState('');
  const [tenure, setTenure] = useState('');
  const [minimumSalary, setMinimumSalary] = useState(null);
  const [eligibilityMessage, setEligibilityMessage] = useState('');

  const selectProperty = (property) => {
    const downpayment = property.price * 0.30;
    const loanAmount = property.price - downpayment;
    setSelectedProperty({ ...property, downpayment, loanAmount });
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleCibilScoreChange = (e) => {
    setCibilScore(e.target.value);
  };

  const handleTenureChange = (e) => {
    setTenure(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProperty) {
      const minSalary = calculateMinimumSalary(selectedProperty.loanAmount, 8, tenure);
      setMinimumSalary(minSalary);
      checkEligibility(income, cibilScore, tenure, selectedProperty.loanAmount);
    }
  };

  
  const calculateMinimumSalary = useMemo(() => {
    return (loanAmount, interestRate, tenure) => {
      const monthlyInterestRate = interestRate / 12 / 100;
      const numberOfInstallments = tenure * 12;
      const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfInstallments)) / (Math.pow(1 + monthlyInterestRate, numberOfInstallments) - 1);
      const minimumSalary = emi / 0.5;
      return Math.round(minimumSalary);
    };
  }, []);

  const calculateEMI = useMemo(() => {
    return (loanAmount, interestRate, tenure) => {
      const monthlyInterestRate = interestRate / 12 / 100;
      const numberOfInstallments = tenure * 12;
      const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfInstallments)) / (Math.pow(1 + monthlyInterestRate, numberOfInstallments) - 1);
      return Math.round(emi);
    };
  }, []);

  const checkEligibility = (income, cibilScore, tenure, loanAmount) => {
    const emi = calculateEMI(loanAmount, 8, tenure);
    const minimumSalary = calculateMinimumSalary(loanAmount, 8, tenure);
    if (income >= minimumSalary && cibilScore >= 650) {
      setEligibilityMessage(`Congratulations! You are eligible for the property. Your EMI will be Rs.${emi}`);
    } else {
      setEligibilityMessage(`Sorry, you are not eligible for the property. Minimum salary required to afford the loan amount at 8% interest for ${tenure} years is Rs.${minimumSalary} and CIBIL score should be more than 650`);
    }
  };

  return (
    <PropertyContext.Provider value={{ 
      selectedProperty, 
      selectProperty, 
      income, 
      cibilScore, 
      tenure, 
      minimumSalary, 
      eligibilityMessage,
      handleIncomeChange, 
      handleCibilScoreChange, 
      handleTenureChange, 
      handleSubmit 
    }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContext;