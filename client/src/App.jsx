import "./App.css";
import { useFormik } from "formik";

function App() {
  // Handle form submission
  function handleSubmit(values) {
    console.log(values);
  }

  // Formik setup
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
        errors.phone = "Phone number must be exactly 10 digits";
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
