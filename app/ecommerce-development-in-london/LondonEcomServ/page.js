'use client';
import { useRouter } from 'next/navigation';
import './ecomserv.css';


const features = [
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965474/Mask_group_75_obmlwf.png",
    title: "Customized E-Commerce Creation",
    description:
      "We do not use pre-made templates; instead create fresh and customized templates for each business. We create scalable, unique ecommerce websites that are suited to your audience, brand, and objectives."
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_76_jziqdb.png",
    title: " Expert WooCommerce & WordPress Integration",
    description:
      `Our team builds Powerful platforms with seamless performance and plugin support by using the versatility of WordPress and WooCommerce.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_77_syi4ue.png",
    title: "Conversion-Focused Shopify Store Development",
    description:
      `We create Designs That Turn Visitors Into buyers. Our team makes it simple for your clients to peruse, buy, and return.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965468/Mask_group_78_d9e39s.png",
    title: "Mobile-Responsive eCommerce Design",
    description:
      `Because shoppers now buy almost everything from their phones, our flexible layouts guarantee your site displays and performs beautifully on desktops, tablets, and handhelds alike.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_79_sv7ryx.png",
    title: "SEO-Optimized eCommerce Integration",
    description:
      ` We adhere to SEO best practices during development to improve your store's search engine ranking and organic traffic from day one.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_80_xj1zov.png",
    title: "Secure Payment Gateway Integration",
    description:
      `We connect reputable payment systems such as Stripe and PayPal to give your consumers a seamless and safe checkout experience.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_81_ct53bt.png",
    title: "Integrated Analytics for E-Commerce Insights",
    description:
      `Keep track of what matters the most. We installed integrated analytics and tracking solutions to assist you in comprehending sales performance, consumer behavior, and expansion prospects.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "AI-Powered Personalization",
    description:
      `More intelligent experiences while shopping. We include AI-powered suggestions and customization features that improve client satisfaction, sales, and engagement.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Ongoing Support, Migration & Upgrades",
    description:
      `We always have your back. Launch is not the end of our work. To keep your ecommerce business safe, quick, and cutting-edge, we provide ongoing monitoring, upgrades, and support.`
  }
];

 const scrollToFormHome = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            const yOffset = -120;
            const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

const EcommerceServices = () => {
  const navigate = useRouter();
  
  return (
    <section className="ecom-london-section">
      <h3 className="ecom-london-title">What Makes Our E-Commerce Services Stand Out</h3>

      <div className="ecom-london-grid-wrapper">
        <div className="ecom-london-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-london-card">
              <div className="ecom-london-icon">
                <img src={feature.icon} alt={feature.title} className="ecom-london-icon-img" />
                <h3 className="ecom-london-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-london-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-london-buttons">
        <button onClick={() => navigate.push('/contact-us')} className="ecom-btn primary">Book a Call
          {/* Book a Call <HiArrowSmallRight /> */}
        </button>
        {/* <button className="ecom-btn secondary">Request an Audit</button> */}
        <button onClick={scrollToFormHome} className="ecom-btn secondary">
          Request an Audit
        </button>
      </div>
    </section>
  );
};

export default EcommerceServices;
