import "./App.css";
import { useFormik } from "formik";

function App() {

 async function handleSubmit(values) {
    try {
      const response = await fetch('/api/mpesa/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  }

  const formik = useFormik({
    initialValues: {
      phone: "",
      amount: "",
    },
    onSubmit: handleSubmit,
    validate: values => {
      const errors = {};


      if (!values.phone) {
        errors.phone = "Phone number is required";
      } else if (values.phone.length !== 10) {
        errors.phone = "Enter a valid phone number";
      }


      if (!values.amount) {
        errors.amount = "Amount is required";
      } else if (values.amount<= 0) {
        errors.amount = "Amount must be a positive number";
      }

      return errors;
    },
  });

  return (
    <>
      <div className="appsection">
        <form onSubmit={formik.handleSubmit}>
          <h1>Lipa Na Mpesa</h1>
          
          <input
            type="number" y
            placeholder="Phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone && (
            <div style={{ color: 'red' }}>{formik.errors.phone}</div>
          )}

          <input
            type="number"
            placeholder="Amount"
            name="amount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
          />
          {formik.errors.amount && formik.touched.amount && (
            <div style={{ color: 'red' }}>{formik.errors.amount}</div>
          )}

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </>
  );
}

export default App;
