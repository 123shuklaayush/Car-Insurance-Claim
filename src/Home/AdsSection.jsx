import React, { useState, useEffect } from 'react';
import image from './../banner/adsandpromotions(3).png';
import './AdsSection.css';

function ApplyImage() {
  const [customerCount, setCustomerCount] = useState(0);
  const [awardCount, setAwardCount] = useState(0);
  const [claimCount, setClaimCount] = useState(0);

  const targetCustomerCount = 4000;
  const targetAwardCount = 500;
  const targetClaimCount = 200;

  const calculateSpeed = (targetValue) => {
    const maxSpeed = 10; // Adjust the maximum speed here
    const speed = Math.ceil(targetValue / 100); // Adjust the divisor to control the speed
    return Math.min(maxSpeed, speed);
  };

  useEffect(() => {
    const customerSpeed = calculateSpeed(targetCustomerCount);
    const awardSpeed = calculateSpeed(targetAwardCount);
    const claimSpeed = calculateSpeed(targetClaimCount);

    const customerTimer = setInterval(() => {
      if (customerCount < targetCustomerCount) {
        setCustomerCount((prevCount) => prevCount + customerSpeed);
      }
    }, 20);

    const awardTimer = setInterval(() => {
      if (awardCount < targetAwardCount) {
        setAwardCount((prevCount) => prevCount + awardSpeed);
      }
    }, 20);

    const claimTimer = setInterval(() => {
      if (claimCount < targetClaimCount) {
        setClaimCount((prevCount) => prevCount + claimSpeed);
      }
    }, 20);

    return () => {
      clearInterval(customerTimer);
      clearInterval(awardTimer);
      clearInterval(claimTimer);
    };
  }, []); // Removed dependencies to prevent re-rendering

  return (
    <div className="customer-review">
      <div className="happyCustomer">
        <h2 className="number">{Math.min(customerCount, targetCustomerCount)}</h2>
        <p className='review-heading'>Customers</p>
      </div>
      <div className="awardWinning">
        <h2 className="number">{Math.min(awardCount, targetAwardCount)}</h2>
        <p className='review-heading'>Award Winning</p>
      </div>
      <div className="insurance-claimed">
        <h2 className="number">{Math.min(claimCount, targetClaimCount)}</h2>
        <p className='review-heading'>Insurance Claimed</p>
      </div>
    </div>
  );
}

export default ApplyImage;
