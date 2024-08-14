import React from 'react';
import './FinancialStressPage.css';

const FinancialStressPage = () => {
  return (
    <div className="remedy-container">
      <header className="header-section">
        <h1>Remedies for Financial Stress</h1>
        <p>Financial stress can be overwhelming. Here are some tips to help manage it:</p>
      </header>

      <div className="card-container">
        <div className="card">
          <img src="/images/create-budget.jpg" alt="Create a Budget" className="card-image" />
          <div className="card-content">
            <h2>Create a Budget</h2>
            <p>Track your income and expenses to create a realistic budget. This can help you identify areas where you can save money.</p>
          
          </div>
        </div>

        <div className="card">
          <img src="/images/emergency-fund.jpg" alt="Build an Emergency Fund" className="card-image" />
          <div className="card-content">
            <h2>Build an Emergency Fund</h2>
            <p>Having an emergency fund can provide a safety net for unexpected expenses and reduce financial stress.</p>
           
          </div>
        </div>

        <div className="card">
          <img src="/images/seeking-advice.jpg" alt="Seek Financial Advice" className="card-image" />
          <div className="card-content">
            <h2>Seek Financial Advice</h2>
            <p>Consider consulting a financial advisor to help you manage your finances and plan for the future.</p>
           
          </div>
        </div>

        <div className="card">
          <img src="/images/avoid-debt.jpg" alt="Avoid Unnecessary Debt" className="card-image" />
          <div className="card-content">
            <h2>Avoid Unnecessary Debt</h2>
            <p>Try to avoid taking on unnecessary debt and focus on paying off existing debts.</p>
            
          </div>
        </div>

        <div className="card">
          <img src="/images/mindfulness-image.jpg" alt="Practice Mindfulness" className="card-image" />
          <div className="card-content">
            <h2>Practice Mindfulness</h2>
            <p>Mindfulness techniques can help you stay calm and focused, even when dealing with financial stress.</p>
           
          </div>
        </div>

        <div className="card">
          <img src="/images/investment-strategy.jpg" alt="Investment Strategy" className="card-image" />
          <div className="card-content">
            <h2>Develop an Investment Strategy</h2>
            <p>Creating a solid investment strategy can help you build wealth over time and mitigate financial stress.</p>
           
          </div>
        </div>

        <div className="card">
          <img src="/images/credit-score.jpg" alt="Improve Your Credit Score" className="card-image" />
          <div className="card-content">
            <h2>Improve Your Credit Score</h2>
            <p>A good credit score can lead to better financial opportunities and lower stress related to borrowing.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialStressPage;
