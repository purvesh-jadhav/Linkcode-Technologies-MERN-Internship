import { useState } from "react";
import "./Form2.css";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    mobile: "",
  });

  // Store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Save submitted data
    setSubmittedData(formData);

    // Clear form
    setFormData({
      name: "",
      email: "",
      city: "",
      mobile: "",
    });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <h1>Hello Again!</h1>

          <p>Create your account to continue</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />

            <button type="submit">SIGN UP</button>
          </form>
        </div>

        <div className="right">
          {submittedData ? (
            <div className="details">
              <h2>Submitted Data</h2>

              <p>
                <strong>Name:</strong> {submittedData.name}
              </p>

              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>

              <p>
                <strong>City:</strong> {submittedData.city}
              </p>

              <p>
                <strong>Mobile:</strong> {submittedData.mobile}
              </p>
            </div>
          ) : (
            <img
              src="https://thumbs.dreamstime.com/b/small-robot-runs-holding-gear-big-smile-has-white-body-brown-accents-appears-to-be-playful-mood-focused-457781308.jpg"
              alt="nature"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form2;