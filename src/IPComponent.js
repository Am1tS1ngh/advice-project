import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        setIpData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching IP data:', error);
      }
    };

    fetchIpData();
  }, []);

  return (
    <div>
      {ipData && (
        <div>
          <p>IP Address: {ipData.ip}</p>
          <p>Country: {ipData.country_name}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentComponent;
