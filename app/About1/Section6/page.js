"use client"
import { useState } from "react";
import "./Section6.css";
import { TfiMicrosoft } from "react-icons/tfi";
import { FaMobileAlt } from "react-icons/fa";

const Section6 = () => {
    const [activeTab, setActiveTab] = useState("E-Commerce Development");


  const tabs = [
    { name: "E-Commerce Development", icon: <TfiMicrosoft/>},
    { name: "Custom Software Development", icon: "🔗" },
    { name: "Mobile Apps", icon: <FaMobileAlt/>,
     },
  ];

  return (
  <>
  <section className="Expect6Sec">
  <div className="expertise-section">
      <h3 className="titleKuH2">Our Expertise</h3>
      <p className="subtitleConpa">
        We specialize in crafting innovative software solutions that bring tangible
        benefits to your business. We have a wealth of experience developing:
      </p>  

      <div className="content-boxPara">
        <div className="tabsParacon">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`tab-buttonCom ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {activeTab === "E-Commerce Development" && (
          <div className="contentline">
            <div className="image-containerPic">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743766681/Software-Applications-1-1_u82mfc.png"
                alt="Software Applications"
                
              />
            </div>
            <div className="text-containerCom">
              <p className="descriptionCom">
                Custom-built applications tailored to your specific needs and workflows.
              </p>
            </div>
          </div>
        )}
          {activeTab === "Custom Software Development" && (
          <div className="contentline">
            <div className="image-containerPic">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743766681/Software-Applications-1-1_u82mfc.png"
                alt="Software Applications"
               
              />
            </div>
            <div className="text-containerCom">
              <p className="descriptionCom">
                Custom-built applications tailored to your specific needs and workflows.
              </p>
            </div>
          </div>
        )}
         {activeTab === "Mobile Apps" && (
          <div className="contentline">
            <div className="image-containerPic">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743767475/Software-Applications_vt8q4l.png"
                alt="Software Applications"
                
              />
            </div>
            <div className="text-containerCom">
              <p className="descriptionCom">
                Custom-built applications tailored to your specific needs and workflows.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
  </>
  );
};

export default Section6;
