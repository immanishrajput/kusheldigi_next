import React,{useState} from "react";
import popupimage from "../../public/assets/popupimage.png";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import OutsideClickHandler from "react-outside-click-handler";
// import OutsideClickHandler from 'react-outside-click-handler';
const Ecommpop = ({setPop, notify}) => {
  const [user, setUser] = useState({
    technology: "",
    products: "",
    Estore: "",
    name6: "",
    mobile6: "",
    email6: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    setUser({
      technology: "",
      products: "",
      Estore: "",
      name6: "",
      mobile6: "",
      email6: "",
    });
  };
  return (
    <>
    
      <div className="ser-main">
        {/* <OutsideClickHandler onOutsideClick={() => setPop(false)}> */}
          <div className="eco_pop">

            <i onClick={() => setPop(false)} className="fa-solid fa-x"></i>

            <div className="eco_container">

              {/* =============== */}
              <div className="main_eco_pop">
                <div className="eco_pop_subcontainer">
                  <div className="left_eco_pop">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168039/popupimage_vvmpoz.png' alt="" />
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
                      <select name="technology" id="technology" value={user.technology} onChange={handleChange}>
                        <option>What technology Are you looking for*?</option>
                        <option>SHOPIFY</option>
                        <option>WOO COMMERCE</option>
                        <option>BIG COMMERCE</option>
                        <option>MAGENTO</option>
                        <option>WORDPRESS</option>
                        {/* <option>Graphic Design</option>
                        <option>Staff Augmntation</option> */}
                      </select>
                      <hr />
                      {/* <select name="products" id="products" value={user.products} onChange={handleChange}>
                        <option>How many products*?</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select> */}
                        <input id="products" value={user.products} name="products" onChange={handleChange} type="number" placeholder="How many products" />
                      <hr />
                      <input value={user.Estore} name="Estore" onChange={handleChange} type="text" placeholder="Any current E-store?" />
                      <hr />
                      <input value={user.name6} name="name6" onChange={handleChange} type="text" placeholder="Name*" />
                      <hr />
                      <input value={user.mobile6} name="mobile6" onChange={handleChange} type="number" placeholder="Mobile*" />
                      <hr />
                      <input value={user.email6} name="email6" onChange={handleChange} type="email" placeholder="Email*" />
                      <hr />
                      <button><span>Submit</span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M8.46817 16.883L7.04466 15.4803L12.6388 9.86957H0.476562V7.86573H12.6388L7.04466 2.25498L8.46817 0.852295L16.4598 8.86765L8.46817 16.883Z" fill="white" />
                      </svg></button>

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
