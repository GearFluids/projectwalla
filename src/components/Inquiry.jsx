import React, { Fragment } from "react";

const Register = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });
  // const { name, email, phone, message } = data;
  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  //   console.log(data);
  // };
  // const handleSubmit = async (e) => {
  //   console.log("start");
  //   e.preventDefaullt();
  //   try {
  //     const res = await fetch(
  //       "https://v1.nocodeapi.com/gearfluids/google_sheets/kSjOGnLFnqQWVixH?tabId=Sheet1",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify([
  //           [name, email, phone, message, new Date().toLocaleString()],
  //         ]),
  //       }
  //     );
  //     await res.json();
  //     alert("your Query submitted !!");
  //     setData({ ...data, name: "", email: "", phone: "", message: "" });
  //     console.log("end");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
            <iframe
              className="inquiry-form"
              title="ProjectWalla Inquiry Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeaDLuInjxqdWY9pgToeY1FJlV6WHs1UVjn0s-_ArRA662Qqg/viewform?embedded=true"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
            {/* <form onSubmit={handleSubmit}>
              <div className="gaps">
                <p />
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
                <p />
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
                <p />
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
                <textarea
                  name="message"
                  placeholder="Message..."
                  value={message}
                  onChange={handleChange}
                  required
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
           */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
