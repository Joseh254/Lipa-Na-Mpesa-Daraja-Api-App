import axios from 'axios';

async function authenticate(){
  const response = await axios.post(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    null,
    {
      auth: {
        username: process.env.DARAJA_CONSUMER_KEY,
        password: process.env.DARAJA_CONSUMER_SECRET
      }
    }
  );
  return response.data.access_token;
};

export async function lipaNaMpesaOnline (phone, amount) {
  const token = await authenticate();

  const response = await axios.post(
    'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {
      // Fill with your request parameters
      BusinessShortCode: process.env.SHORTCODE,
      LipaNaMpesaOnlineShortcode: process.env.SHORTCODE,
      LipaNaMpesaOnlineLipaNaMpesaOnline: process.env.LIPA_NA_MPESA_ONLINE,
      PhoneNumber: phone,
      Amount: amount,
      // other parameters
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};
