import React from 'react';
import "./ShopifyBanner.css";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const ShopifyBanner = () => {
  return (
    <div className='shopify-new-banner-outer-container'>
        <div className="shopify-new-banner-container">
                <div className="shopify-new-banner-left">
                    <p className='shopify-new-sm-location'>Home / Services / Shopify </p>
                    <h2 className='shopify-new-banner-heading'>Shopify development company</h2>
                    <h3 className='shopify-new-banner-sm-heading '>Elsner is a top Shopify development company and so, we always offer proven Shopify store development services. We actually build stores that sell.</h3>
                    <div className='flex-bigcommerce-banner-btns'>
                        <a href='#form-section' className='bigcommerce-banner-btn' >Talk to a Consultant</a>
                        <Link href="/contact-us"> <button className='bigcommerce-banner-btn big-transparent-btn' >  Book a Call  <FaArrowRightLong /></button></Link>
                    </div>
                    {/* <img className='new-shopify-review-img' loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744009168/reviews-google_bq5kbl.png" alt="reviews" /> */}
                </div>
                <div className="shopify-new-banner-right">
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744008381/shopify-banner_r2yygh.png" loading='lazy' alt="shopify-banner" />
                </div>
        </div>
    </div>
  )
}

export default ShopifyBanner