import React from "react";
import './Banner10.css';
import { FaShoppingCart, FaBriefcaseMedical, FaBuilding, FaNewspaper, FaRobot, FaIndustry, FaPlane, FaShieldAlt, FaMoneyBill, FaGraduationCap, FaGasPump } from "react-icons/fa";

const industries = [
  { name: "Ecommerce", icon: <FaShoppingCart /> },
  { name: "Healthcare", icon: <FaBriefcaseMedical /> },
  { name: "Real Estate", icon: <FaBuilding /> },
  { name: "Media", icon: <FaNewspaper /> },
  { name: "AI Software", icon: <FaRobot /> },
  { name: "Oil & Gas", icon: <FaGasPump /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "Travel & Hospitality", icon: <FaPlane /> },
  { name: "Insurance", icon: <FaShieldAlt /> },
  { name: "Security", icon: <FaShieldAlt /> },
  { name: "Finance", icon: <FaMoneyBill /> },
  { name: "Education", icon: <FaGraduationCap /> }
];

const Banner11 = () => {
    return (
        <section className="industry-expertise-section">
            <div className="industry-container">
                <div className="industry-expertise-header">
                    <div className="industry-sec-title">
                        <span>Industries We Serve</span>
                        <h2>Custom Ecommerce Solutions for Every Industry</h2>
                    </div>
                </div>

                <div className="lemon">
                    <p>
                    We at Kushel Digi Solutions do not think in terms of a single-size-fits-all approach. Our industry-specific knowledge assists companies grow, enhance, and innovate with tailored digital solutions.
                    </p>
                </div>

                <ul className="industry-infocus-boxes">
                    {industries.map((industry, index) => (
                        <li key={index}>
                            <a href="#">
                                <span className="industry-icon">
                                    
                                    <div className="cicleEComWe">
                                    <p className="cicleEComWepa">{industry.icon}</p>
                                    </div>
                                </span>
                                <strong>{industry.name}</strong>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Banner11;
