"use client"
import React from "react";
import "./Banner8.css";

const clients = [
  { name: "BB DAKOTA", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083491/sp20_xvpwrq_cvsgl0.png" },
  { name: "BuildDirect", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp1_tlo2jq_hjk2gy.png" },
  { name: "Chrome", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083491/sp18_iscwvs_a1jf5a.png" },
  { name: "Empoli Outlet", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp7_ludrbx_xjnbvo.png" },
  { name: "Groomie", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp19_lg8ebe_bweivw.png" },
  { name: "J.R. DUUN", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp17_awm1ho_vcjvl4.png" },
  { name: "Koolfly", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp4_mjfpjw_psfafe.png" },
  { name: "No Man Walks Alone", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp3_kriscj_gwntuv.png" },
  { name: "Ruby and Jenna", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp6_oqjqdl_cvfvew.png" }
];

const Banner9 = () => {
  return (
    <section className="clientsSection">
      <div className="textContainer">
        <h2>Your Vision, Our Commitment</h2>
        <p>Delivering powerful, high performance ecommerce solutions for our clients.</p>
      </div>
      <div className="logoGrid">
        {clients.map((client, index) => (
          <div key={index} className="logoItem">
            <img src={client.src} alt={client.name} />
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner9;
