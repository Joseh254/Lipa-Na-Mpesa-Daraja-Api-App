import { lipaNaMpesaOnline } from '../utils/darajaUtils.js';

export const initiatePayment = async (req, res) => {
  const { phone, amount } = req.body;

  try {
    const result = await lipaNaMpesaOnline(phone, amount);
    res.json({success:true, data:result});
  } catch (error) {
    res.status(500).json({success:false, message: 'Payment initiation failed' });
  }
};
