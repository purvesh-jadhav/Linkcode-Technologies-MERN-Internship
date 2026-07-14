import { useState } from "react";
import "./Form2.css";

const Form2 = () => {

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    city:"",
    mobile:"",
  });

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();

    console.log(formData);

    setFormData({
      name:"",
      email:"",
      city:"",
      mobile:"",
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

            <button type="submit">
              SIGN UP
            </button>

          </form>

        </div>

        <div className="right">

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900"
            alt="nature"
          />

        </div>

      </div>

    </div>

  );
};

export default Form2;