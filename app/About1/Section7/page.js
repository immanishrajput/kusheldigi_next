"use client"
import { useState } from "react";
import './Section7.css';

const Section7 = () => {
  const [activeYear, setActiveYear] = useState(2017);

  const data = {
    2017: {
      title: "2017: Foundation of Kushel Digi ",
      description:
        "In 2017, Kushel Digi was founded in September 2017 under the leadership of our esteemed founder Mr. Shubham Gupta along with two other colleagues. Our founder was very clear about his vision to deliver exceptional services in web development and e-commerce development without compromising the quality and cost. Within a month, we had successfully completed our first project.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },
    2018: {
      title: "2018",
      description:
        "After completion of our first project, people started knowing about our services and then we never look back. We had started hiring motivated and skilled members. We set up our office in Delhi NCR.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },
    2019: {
      title: "2019",
      description:
        "In order to meet the expectations of customers and increasing demand of other services, we had expanded our services. We were elated to deliver more than 50 projects successfully.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },
    2020: {
      title: "2020",
      description:
        "The COVID 19 pandemic hit the world and in India affected our services and projects delivery timeline. It was the most challenging time for our company and we lost nearly 80 percent of our business. We had to terminate our services on 30th March 2020 in the best interest of our staffs.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },
    2021: {
      title: "2021",
      description:
        "Nearly a year into the pandemic, every month seemed to drag on forever. There was uncertainty about when we could resume office as the company was entirely shut down.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },
    2022: {
      title: "2022",
      description:
        "Kushel Digi underwent a complete transition when the pandemic subsided. We began to offer online services and introduced contactless payments with the establishment of our virtual office. Sector 63 of Noida is where our new office is located.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },
    2023: {
      title: "2023",
      description:
        "We are refocusing on our offerings and have also started business with international clients to achieve global success. We currently operate as a full-service e-commerce and marketing agency.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },

    2024: {
      title: "2024",
      description:
        "We have officially become the certified partner of Bigcommerce which in itself is a big achievement for our team. We have started delivering more scalable and secure ecommerce solutions for 50+ ecommerce projects integrating Bigcommerce technology.",
      image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743834169/grwoth-story-image_ghqetj.webp",
    },
  };

  return (
   <section className="growthStory">
     <div className="growth-story-container">
      <h2 className="growth-story-title">Our growth story</h2>
      <div className="growth-story-tabs">
        {Object.keys(data).map((year) => (
          <button
            key={year}
            className={`growth-story-tab ${
              activeYear === Number(year) ? "active" : ""
            }`}
            onClick={() => setActiveYear(Number(year))}
          >
            {year}
          
          </button>
           
        ))}
        
      </div>
      <hr className="growthHr"/>
      <div className="growth-story-content">
        <img
          src={data[activeYear].image}
          alt={data[activeYear].title}
          className="growth-story-image"
        />
        <div className="growth-story-text">
          <h3>{data[activeYear].title}</h3>
          <p>{data[activeYear].description}</p>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Section7;
