import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { BranchOption } from "../services/ContactService";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    message: "",
  });

  const { name, email, phone, branch, message } = data;
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/gearfluids/google_sheets/zCmRMwnSRWPeWKns?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, phone, branch, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      notify("Thank You For Submiting the form. We will contact you Shortly");
      setdata({
        ...data,
        name: "",
        email: "",
        phone: "",
        branch: "",
        message: "",
      });
    } catch (error) {}
  };
  const notify = (message) => toast.success(`${message}`);
  return (
    <Fragment>
      <div className="register-sec-w3l jarallax" id="book">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            InQuery form
            <span className="thr">
              Write your Query related to Project Making we will try to clear
              your doubts.
            </span>
          </h3>
          <div className="book-appointment" data-aos="zoom-in">
            <form onSubmit={handleSubmit}>
              <div className="gaps">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gaps">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gaps">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gaps">
                <label htmlFor="branch">Branch</label>
                <select
                  type="text"
                  name="branch"
                  placeholder=""
                  value={branch}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select--</option>
                  {BranchOption.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="gaps">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message..."
                  value={message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
