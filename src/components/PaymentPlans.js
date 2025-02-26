import React from 'react';
import "../styles/Payment.css"

const PaymentPlans = () => {
  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Plans</h1>
      <div className="payment-cards">
        <div className="payment-card">
          <h2>Pay in Full</h2>
          <p className="subtitle">Get 5% discount with a one time payment</p>
          <div className="features">
            <h3>FEATURES</h3>
            <ul>
              <li>Access to all sessions</li>
              <li>Class activities</li>
              <li>Certificate of completion</li>
              <li>Post-bootcamp support</li>
              <li>Priority job board access</li>
            </ul>
            <p className="group-discount">GROUP PAYMENT (GET 10% OFF)</p>
          </div>
          <div className='get-started'>
            <button className="get-started-btn">Get started</button>
          </div>
        </div>
        <div className="payment-card">
          <h2>Installment Payment</h2>
          <p className="subtitle">Payable in 3 installments</p>
          <div className="features">
            <h3>FEATURES</h3>
            <ul>
              <li>Access to all sessions</li>
              <li>Class activities</li>
              <li>Certificate of completion</li>
              <li>Post-bootcamp support</li>
              <li>Priority job board access</li>
              <li>The certificate is available after completion</li>
            </ul>
          </div>
          <div className='get-started'>
            <button className="get-started-btn">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlans;
