import React,{useState} from "react";
import popupimage from "../../public/assets/popupimage.png";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import OutsideClickHandler from "react-outside-click-handler";
// import OutsideClickHandler from 'react-outside-click-handler';
import Head from 'next/head';
import Link from "next/link";

const Ecommpop = ({setPop, notify = (type, message)=> console.log(type, message)}) => {
  const [user, setUser] = useState({
    technology: "",
    products: "",
    Estore: "",
    name6: "",
    mobile6: "",
    email6: "",
  });
  // const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {

    const res = await fetch("https://backend.kusheldigi.com/contact5", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    // console.log(data);
    // alert(data.message);
    notify( "success", data.message);
    // setMessage(data.message); 
    setUser({
      technology: "",
      products: "",
      Estore: "",
      name6: "",
      mobile6: "",
      email6: "",
    });
  // } catch (error) {
  //   setMessage("Something went wrong. Please try again.");
  // }
  };
  return (
    <>

<Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>
    
      <div className="ser-main">
        {/* <OutsideClickHandler onOutsideClick={() => setPop(false)}> */}
          <div className="eco_pop">

            <i onClick={() => setPop(false)} className="fa-solid fa-x"></i>

            <div className="eco_container">
              
              {/* =============== */}
              <div className="main_eco_pop">
                <div className="eco_pop_subcontainer">
                  <div className="left_eco_pop">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168039/popupimage_vvmpoz.png' alt="kushel" />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="right_eco_pop">
                      <div className="eco_pop_innerright">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="63"
                          height="48"
                          viewBox="0 0 63 48"
                          fill="none"
                        >
                          <path d="M34 0L0 48H29.5L63 0H34Z" fill="#1265FF" />
                        </svg>
                        <h1>Get in touch</h1>
                      </div>
                      <p>
                        Let us know your requirements and we’ll get back to you as
                        soon as possible
                      </p>
                      
                      <select
                             name="technology"
                                  id="technology"
                     value={user.technology}
           onChange={handleChange}
                  required>
                             <option value="" disabled>
                              What technology are you looking for?*
                              </option>
               <option value="SHOPIFY">SHOPIFY</option>
                   <option value="WOO COMMERCE">WOO COMMERCE</option>
              <option value="BIG COMMERCE">BIG COMMERCE</option>
                <option value="MAGENTO">MAGENTO</option>
                <option value="WORDPRESS">WORDPRESS</option>
                            </select>
                      <hr />
                      {/* <select name="products" id="products" value={user.products} onChange={handleChange}>
                        <option>How many products*?</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select> */}
                        <input id="products" value={user.products} name="products" onChange={handleChange} type="number" placeholder="How many products" required/>
                      <hr />
                      {/* <input value={user.Estore} name="Estore" onChange={handleChange} type="text" placeholder="Any current E-store?" required/> */}
                      <input
                          value={user.Estore}
                             name="Estore"
                   onChange={(e) => {
                const regex = /^[a-zA-Z\s]*$/; 
                              if (regex.test(e.target.value)) {
                                handleChange(e); 
                               }
                                           }}
  type="text"
  placeholder="Any current E-store?"
  required
/>
                      <hr />
                      
  
                      {/* <input value={user.name6} name="name6"  onChange={(e) => {
                const regex = /^[a-zA-Z\s]*$/; 
                              if (regex.test(e.target.value)) {
                                handleChange(e); 
                               }
                                           }} type="text" placeholder="Name*" maxLength="32" required/> */}
                                            <input
  required
  name="name6"
  value={user.name6}
  onChange={(e) => {
    const { value } = e.target;

    const regex = /^[A-Za-z]+(?: [A-Za-z]*)?$/;

    if (value === "" || regex.test(value)) {
      setUser((prev) => ({ ...prev, name6: value }));
    }
  }}
  type="text"
  placeholder="Name*"
  maxLength="32"
/>
                      <hr />
                      {/* <input value={user.mobile6} name="mobile6" onChange={handleChange} type="tel" maxLength="10" placeholder="Mobile*" required/> */}
                      <input value={user.mobile6} name="mobile6" onChange={(e) => {
                          const value = e.target.value;
                         if (/^\d{0,10}$/.test(value)) {
                            handleChange(e);
                                  }
                                 }}
                        type="tel"
                  maxLength="10"
                placeholder="Mobile*"
            pattern="\d{10}"  
                     required
                           />
                      <hr />
                      {/* <input value={user.email6} name="email6" onChange={handleChange} type="email" placeholder="Email*" required/> */}
                      <input
  value={user.email6}
  name="email6"
  onChange={handleChange}
  onKeyDown={(e) => {
    if (e.key === ' ') {
      e.preventDefault(); // Space enter hone se rokta hai
    }
  }}
  type="email"
  placeholder="Email*"
  required
/>
                      <hr />
                   <button><span>Submit</span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M8.46817 16.883L7.04466 15.4803L12.6388 9.86957H0.476562V7.86573H12.6388L7.04466 2.25498L8.46817 0.852295L16.4598 8.86765L8.46817 16.883Z" fill="white" />
                      </svg></button> 
                      {/* {message && (
                      <div className="popup-message">
                        {message}
                      </div>
                    )} */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        {/* </OutsideClickHandler> */}
      </div>
    </>
  );
};

export default Ecommpop;
