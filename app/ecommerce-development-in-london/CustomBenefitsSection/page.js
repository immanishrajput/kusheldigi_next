"use client";

import { useState } from "react";
import './custombenfit.css';

const benefits = [
    {
      title: "Personalized Shopping Experience",
      icon: "🛍️",
      description:
        "With a bespoke ecommerce site, you can line up product suggestions, headlines, and special deals to match what each visitor has already done. The result feels personal, keeps shoppers interested, lifts their happiness, and encourages them to come back.",
    },
    {
      title: " Higher Conversion Rates",
      icon: "📈",
      description:
        "When the whole store speaks to your target audience and the goals you set, buying feels easy rather than clumsy. Coupled with clear CTAs and tidy paths from browse to checkout, this layout steadily pushes conversion rates north.",
    },
    {
      title: "Mobile Responsive",
      icon: "📱",
      description:
        "Your shop will resize, reorganize, and run smoothly on every screen, smartphone, tablet, or old-school laptop. That mobile-first polish lets people flip between devices without squinting or swiping forever, making the buy-it-now tap almost automatic.",
    },
    {
      title: "Advanced Analytics",
      icon: "📊",
      description:
        "Built-in reports lay out who is shopping, what they're ignoring, and which campaigns are paying the bills. Measuring live numbers lets you steer stock, tweak offers, and slice revenue faster than waiting on end-of-month emails.",
    },
    {
      title: "Faster Load Times",
      icon: "⚡",
      description:
        "Custom code stays lean because we only include what adds value. Pages pop open in a blink, frustrating less, bouncing fewer, and nudging search engines to give your brand a higher seat.",
    },
    {
      title: "Secure Payment Gateways",
      icon: "🔒",
      description:
        "We link your store to highly regarded, PCI-safe gateways such as Stripe and PayPal. Shoppers know their card data is protected, so they feel at ease and that helps you earn their trust.",
    },
    {
      title: "Easy Checkout Process",
      icon: "💳",
      description:
        "A clear, no-fuss checkout cuts cart drop-offs and leaves buyers happy. Since each step can be tailored, customers breeze through the process, and you keep the sale.",
    },
    {
      title: "Third-Party Integrations",
      icon: "🔌",
      description:
        "Plug your shop into any favorite marketing app, stock tool, CRM, or ERP. Seamless links let you automate routine work, run operations smoothly, and grow without headaches.",
    },
    {
      title: "Long-Term Cost Efficiency",
      icon: "💰",
      description:
        "Custom build-outs may cost more upfront, but they pay you back over time. You dodge endless subscription bills, enjoy full control, and shape a system that scales with your success.",
    },
  ];
  
export default function CustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
        What Are the Benefits of Having a Custom <br/> E-Commerce Website?
        </h2>
        <p className="custom-benefits-subtext">
        Get an ecommerce solution by customizing every aspect of your online store to match your unique business needs.
        </p>

        <div className="custom-benefits-grid">
          <ul className="custom-benefits-list">
            {benefits.map((item, index) => (
              <li
                key={index}
                className={`custom-benefits-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="custom-benefits-dot" />
                {item.title}
              </li>
            ))}
          </ul>

          <div className="custom-benefits-content">
            {benefits[activeIndex].description && (
              <div className="custom-benefits-card">
                <div className="custom-benefits-icon">{benefits[activeIndex].icon}</div>
                <h3>{benefits[activeIndex].title}</h3>
                <p>{benefits[activeIndex].description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
