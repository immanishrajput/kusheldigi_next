"use client"
import React from "react";
import "./Section8.css";

const Section8 = () => {
  const values = [
    {
      title: "Innovation and Creativity",
      description:
        "In the heart of our ethos lies a relentless pursuit of innovation and creativity. We champion groundbreaking ideas and nurture an environment where imagination flourishes, ensuring that every solution we craft not only meets but exceeds the expectations of the evolving market landscape.",
      icon: "💡",
      className: "innovation-creativity",
    },
    {
      title: "Customer-First Approach",
      description:
        "Our commitment to a customer-first approach is unwavering. By placing the needs and satisfaction of our clients at the forefront of everything we do, we forge lasting relationships built on trust and mutual respect, delivering bespoke solutions that truly make a difference.",
      icon: "🎯",
      className: "customer-first",
    },
    {
      title: "Crystal-Clear Transparency",
      description:
        "We uphold crystal-clear transparency in all our endeavors. By fostering open communication and honesty, we ensure that clients and partners alike are fully informed and engaged at every stage of collaboration. This principle is the cornerstone of our integrity and success.",
      icon: "🔍",
      className: "transparency",
    },
    {
      title: "Quality and Excellence",
      description:
        "Quality and excellence are the hallmarks of our work. With a meticulous eye for detail, we strive for perfection in every project, embodying professionalism and a dedication to delivering outcomes that not only meet but surpass the highest standards of the industry.",
      icon: "⚡",
      className: "quality-excellence",
    },
    {
      title: "Collaboration and Teamwork",
      description:
        "Collaboration and teamwork are at the core of our philosophy. We believe in the power of collective expertise and diverse perspectives, working together seamlessly to achieve common goals. This synergy enables us to tackle challenges more efficiently and innovate in ways that single efforts cannot.",
      icon: "🤝",
      className: "collaboration-teamwork",
    },
    {
      title: "Be Honest & Ethical",
      description:
        "Being honest and ethical is not just a policy but a guiding principle for us. We conduct our business with the utmost integrity, embracing responsibility, and adhering to the highest ethical standards. This commitment earns us the trust of our clients, partners, and the community we serve.",
      icon: "⚖️",
      className: "honest-ethical",
    },
  ];

  return (
  <section className="coreMainConta">
      <div className="core-values-container">
       <p className="corepara">CORE VALUES</p>
      <h3 className="core-values-title">Principles of WEDOWEBAPPS</h3>
      <div className="core-values-grid">
        {values.map((value, index) => (
          <div key={index} className={`core-value-card ${value.className}`}>
            <div className="icon-title-wrapper">
              <span className="core-value-icon">{value.icon}</span>
              <h3 className="core-value-heading">{value.title}</h3>
             
            </div>
            <p className="core-value-description">{value.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Section8;
