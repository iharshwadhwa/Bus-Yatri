import React from "react";
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';

import '@fortawesome/fontawesome-free/css/all.css';

const Main = () => {
  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token'); // Replace 'authToken' with the key you use to store the token
  
    // Optionally, you can redirect the user to the home or login page
    window.location.href = '/login'; // Redirect to login page (adjust if needed)
  };
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
  <div className="container">
    {/* Brand */}
    <a className="navbar-brand" href="#">
      <img
        src="src/assets/img/busYatri-removebg-preview copy.png"
        alt="redBus"
        width="80px"
        height="90px"
      />
    </a>
    {/* Toggler/collapsibe Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#menu-nav"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* Navbar links */}
    <div className="collapse navbar-collapse" id="menu-nav">
      {/* Left-aligned nav (default) */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase" href="/buses">
            Bus Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase" href="/addbuses">
            Add Buses
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase" href="#">
            Bus Hire
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase" href="#">
            Pilgrimages
          </a>
        </li>
      </ul>
      {/* Right-aligned nav */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Help
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            data-toggle="dropdown"
          >
            Manage Booking
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Link 1
            </a>
            <a className="dropdown-item" href="#">
              Link 2
            </a>
            <a className="dropdown-item" href="#">
              Link 3
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            href="/profile"
            data-toggle="dropdown"
          >
            <i className="fas fa-user-circle" />
          </a>
          <div
            className="dropdown-menu"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "50vw",
              height: "50vh",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                border: "2px solid blue",
                padding: 20,
                width: "100%",
                height: "100%",
                marginRight: 0,
                overflow: "auto",
              }}
            >
              <h1 className="bg-primary text-dark">User List</h1>
              {/* Template for iterating over users list */}
              {/* <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.fullname}</td>
                    <td>{user.psw}</td>
                    <td>
                      <a href="/editUser?userid={user._id}">Edit</a> |
                      <a href="/deleteUser?userid={user._id}">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </li>
        {/* Logout Button */}
        <li className="nav-item">
          <button
            className="nav-link text-white bg-transparent border-0"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Main Home Banner and Input Search Container */}
      <div className="position-relative">
        <div>
          <div className="home-banner" />
        </div>
        <div className="city-selection-container p-5">
  <h3 className="text-center text-primary">Choose Your Cities</h3>
  <form className="d-flex flex-row  align-items-center">
    <select className="form-control m-2" id="source-city">
      <option value="" disabled selected>
        Select Source City
      </option>
      <option value="Delhi">Delhi</option>
      <option value="Jaipur">Jaipur</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
      <option value="Kolkata">Kolkata</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Pune">Pune</option>
      <option value="Ahmedabad">Ahmedabad</option>
      <option value="Lucknow">Lucknow</option>
      <option value="Mohali">Mohali</option>
      <option value="Chandigarh">Chandigarh</option>
    </select>
    <select className="form-control m-2" id="destination-city">
      <option value="" disabled selected>
        Select Destination City
      </option>
      <option value="Delhi">Delhi</option>
      <option value="Jaipur">Jaipur</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
      <option value="Kolkata">Kolkata</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Pune">Pune</option>
      <option value="Ahmedabad">Ahmedabad</option>
      <option value="Lucknow">Lucknow</option>
      <option value="Mohali">Mohali</option>
      <option value="Chandigarh">Chandigarh</option>
    </select>
    <button type="submit" className="btn btn-primary m-2">
      <a className="text-white text-decoration-none" href="/buses">
        Search
      </a>
    </button>
  </form>
</div>

      </div>

      {/* Cashback Container */}
      <div className="cashback-container d-flex justify-content-center bg-light mb-5 pb-5 pt-5">
        <div className="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
          <div className="text-muted font-weight-bold small">
            Travel on RTC and Save up to Rs 175
          </div>
          <div>
            <img src="src/assets/img/bus.png" alt="bus" />
          </div>
          <div className="text-muted small">Pay using Amazon Pay</div>
          <div className="font-weight-normal">Use code : RBRTC</div>
        </div>
        <div className="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
          <div className="text-muted font-weight-bold small">
            Cashback up to Rs 275 on bus tickets.
          </div>
          <div>
            <img src="src/assets/img/holiday_cashback.png" alt="bus" />
          </div>
          <div className="text-muted small">Limited Period Offer</div>
          <div className="font-weight-normal">Use code : COOLCB</div>
        </div>
        <div className="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
          <div className="text-muted font-weight-bold small">
            Cashback up to Rs 275 on bus tickets.
          </div>
          <div>
            <img src="src/assets/img/amazon.png" alt="bus" />
          </div>
          <div className="text-muted small">Pay using Amazon Pay</div>
          <div className="font-weight-normal">Limited Period Offer</div>
        </div>
      </div>

      
      <div className="on-time-guarantee d-flex  flex-wrap mt-5 mb-5 p-4">
    <div className="pr-4">
        <img src="src/assets/img/hero_ontime.png" alt="hero_ontime" width="80px" />
        <h2>Introducing On-Time Guarantee</h2>
    </div>
  
    <div>
        
      

        <div className="d-flex  flex-wrap justify-content-between">
            <div className="refund-info">
                <h5 className="text-primary">Bus on time</h5>
                <div className="font-weight-bold">Get 25% refund</div>
                <div className="text-muted">If bus departure is delayed by 30 mins from boarding point.</div>
            </div>
            <div className="refund-info">
                <h5 className="text-primary">No bus cancellation</h5>
                <div className="font-weight-bold">Get 150% refund</div>
                <div className="text-muted">Bus is cancelled without an alternate arrangement.</div>
            </div>
            <div className="refund-info">
                <h5 className="text-primary">Alternate assurance</h5>
                <div className="font-weight-bold">Get 300% refund</div>
                <div className="text-muted">Bus breaks down with no alternate arrangement within 6 hours.</div>
            </div>
        </div>
    </div>
</div>

  {/* redBus Video Container */}
  <div className="d-flex justify-content-center m-5">
    <iframe
      src="https://www.youtube.com/embed/yz-axGEViyU?si=T1kzOtQ1gAPgTyBl"
      width={375}
      height={198}
    />
  </div>

<div className="track-my-bus bg-light p-4 mb-5 pb-5">
  <div className="mb-5">
    <div className="float-left mr-5 ml-5">
      <img src="src/assets/img/tmb_img.png" alt="tmb_img" />
    </div>
    <div className="d-table-cell align-middle pl-5 pr-5">
      <h3>TRACK MY BUS - Smarter Way To Travel</h3>
      <p className="text-muted">
        Track your bus with our ‘Track My Bus’ feature and know the exact
        location in real-time.Stay informed and keep your family informed!
      </p>
      <button className="btn btn-light btn-outline-primary">Know More</button>
    </div>
  </div>
  <hr className="w-75 border" />
  <div className="d-flex justify-content-around p-5">
    <div className="text-center">
      <div className="lead text-muted font-weight-normal">BUSES</div>
      <h1 className="text-primary">10,000</h1>
      <div className="text-muted">Total buses currently being tracked</div>
    </div>
    <div className="text-center">
      <div className="lead text-muted font-weight-normal">ROUTES</div>
      <h1 className="text-primary">60,000</h1>
      <div className="text-muted">Total routes covered by live tracking</div>
    </div>
    <div className="text-center">
      <div className="lead text-muted font-weight-normal">USERS</div>
      <h1 className="text-primary">40,000</h1>
      <div className="text-muted">Total users using Track My Bus feature</div>
    </div>
  </div>
</div>

       {/* Convenience On-The-Go IOS/Android Container */}
       <div className="ios-android-container position-relative mb-5">
  <div>
    {" "}
    {/* Background Image Container */}
    <div className="d-flex justify-content-around">
      <div className="pt-4">
        <h3>CONVENIENCE ON-THE-GO.</h3>
        <div className="w-75">
          <p className="text-dark small">
            Exclusive features on mobile include
          </p>
          <p className="text-dark small">
            busYatri NOW - when you need a bus in the next couple of hours.
            Board a bus on its way.
          </p>
          <p className="text-dark small">
            Boarding Point Navigation - Never lose your way while travelling to
            your boarding point!
          </p>
          <p className="text-dark small">
            1-click Booking - Save your favourite payment options securely on
            Yatri, and more.
          </p>
          <p className="text-dark small">Download the app.</p>
          <p className="text-dark small">
            Enter your email below to get the best offers.
          </p>
          {/* SMS me the link */}
          <form className="form-inline">
            <input
              className="form-control form-control-sm mr-2 mb-2 w-50"
              type="text"
              placeholder="Enter your email address"
            />
            <button
              className="btn btn-outline-primary btn-sm mb-2"
              type="submit"
            >
              SMS ME THE OFFERS
            </button>
          </form>
          {/* Download redBus Application */}
          <button className="btn btn-dark rounded-circle mr-2">
            <i className="fab fa-apple" />
          </button>
          <button className="btn btn-dark rounded-circle">
            <i className="fab fa-google-play" />
          </button>
        </div>
      </div>
      <div>
        <img
          src="src/assets/img/IOS_Android_device.png"
          alt="IOS_Android_device"
          width={420}
        />
      </div>
    </div>
  </div>
</div>

 
{/* We Promise To Deliver Container */}
  <div className="we-promise-container bg-light p-3 pb-5">
    <div className="text-center m-4">
      <img src="src/assets/img/promise.png" alt="promise" width={85} />
      <h2 className="text-dark m-2">WE PROMISE TO DELIVER</h2>
    </div>
    <div className="text-center d-flex">
      <div className="border bg-white w-25">
        <div className="p-4">
          <img
            src="src/assets/img/maximum_choices.png"
            alt="maximum_choices"
            width={120}
          />
        </div>
        <div className="mb-5 m-4 font-weight-light lead">MAXIMUM CHOICE</div>
        <div className="m-4 p-1 text-muted">
          We give you the widest number of travel options across thousands of
          routes.
        </div>
      </div>
      <div className="border bg-white w-25">
        <div className="p-4">
          <img src="src/assets/img/customer_care.png" alt="customer_care" width={91} />
        </div>
        <div className="mb-5 mt-4 font-weight-light lead">
          SUPERIOR CUSTOMER SERVICE
        </div>
        <div className="m-4 p-1 text-muted">
          We put our experience and relationships to good use and are available
          to solve your travel issues.
        </div>
      </div>
      <div className="border bg-white w-25">
        <div className="p-4">
          <img src="src/assets/img/lowest_Fare.png" alt="lowest_Fare" width={120} />
        </div>
        <div className="mb-5 mt-4 font-weight-light lead">LOWEST PRICES</div>
        <div className="m-4 p-1 text-muted">
          We always give you the lowest price with the best partner offers.
        </div>
      </div>
      <div className="border bg-white w-25">
        <div className="p-4">
          <img src="src/assets/img/benefits.png" alt="benefits" width={120} />
        </div>
        <div className="mb-5 mt-4 font-weight-light lead">
          UNMATCHED BENEFITS
        </div>
        <div className="m-4 p-1 text-muted">
          We take care of your travel beyond ticketing by providing you with
          innovative and unique benefits.
        </div>
      </div>
    </div>
  </div>
  {/* Bus Locations Section */}
  <div className="bus-locations-container" style={{ padding: 20 }} id={5}>
    <h3 className="text-center" style={{ textAlign: "center", color: "blue" }}>
      Track Bus Locations
    </h3>
    <iframe
                id="google-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109183.64720303457!2d76.1899655!3d30.1491551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fbbf01ed07409%3A0x8bff4a0b2a1ee7b9!2sYour%20Location!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
  </div>
  

  {/* We Promise To Deliver Container */}
  <div className="we-promise-container bg-light p-3 pb-5">
    <div className="text-center m-4"></div>
    <div className="text-center d-flex">
      <div className="border bg-white w-50">
        <div className="p-4">
          <a href="#">
            <img
              src="src/assets/img/customer_care.png"
              alt="customer_care"
              width={190}
              className="zoom-img"
            />
          </a>
        </div>
        <div className="mb-5 mt-4 font-weight-light lead">
          Check Status Of Your Bus
        </div>
        <div className="m-4 p-1 text-muted">
          We put our experience and relationships to good use and are available
          to solve your travel issues.
        </div>
      </div>
      <div className="border bg-white w-50">
        <div className="p-4">
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4658/4658943.png"
              alt="benefits"
              width={120}
              className="zoom-img"
            />
          </a>
        </div>
        <div className="mb-5 mt-4 font-weight-light lead"><a 
    href="https://docs.google.com/forms/d/e/1FAIpQLScpJUub4pf3N_9rwx43AdHtnS9QVfCvX22aZIonmQGTCVKIhQ/viewform?usp=sf_link" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn btn-primary"
  >
    Give Feedback
   </a></div>
        <div className="m-4 p-1 text-muted">
          We take care of your travel beyond ticketing by providing you with
          innovative and unique benefits.
        </div>
      </div>
    </div>
  </div>


    </>
  );
};
export default Main;
