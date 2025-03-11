/** @format */

import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="Work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <p className="primary-heading">What they are saying</p>
        <p className="primary-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          blanditiis laudantium praesentium!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
