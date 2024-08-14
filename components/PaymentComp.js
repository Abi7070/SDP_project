// src/components/PaymentComp.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import QrReader from 'react-qr-reader'; // Import the QR scanner
import './PaymentComp.css'; // Import the CSS file for styling

const PaymentComp = () => {
  const [scanData, setScanData] = useState('No result'); // State to hold scanned data
  const [showScanner, setShowScanner] = useState(false); // State to toggle scanner visibility
  const paymentUrl = "https://example.com/payment"; // Replace with your payment URL

  const handleScan = (data) => {
    if (data) {
      setScanData(data); // Set scanned data
      console.log('Scanned Data:', data);
      alert(`Scanned Data: ${data}`); // Show scanned data in an alert
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="payment-comp-container">
      <div className="payment-comp-wrapper">
        <h2 className="payment-comp-header">Scan to Pay</h2>
        <QRCode
          value={paymentUrl}
          size={256}
          bgColor="#ffffff"
          fgColor="#000000"
          level="L"
          className="payment-comp-qrcode"
        />
        <p className="payment-comp-info">Use the QR code to complete your payment.</p>
        
        <button onClick={() => setShowScanner(!showScanner)}>
          {showScanner ? 'Hide Scanner' : 'Show Scanner'}
        </button>

        {showScanner && (
          <div className="qr-scanner">
            <QrReader
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }} // Make it responsive
            />
            <p>Scanned Result: {scanData}</p> {/* Display scanned data */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentComp;
