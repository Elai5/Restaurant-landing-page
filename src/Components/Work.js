/** @format */

import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      tittle: "Pick Meals",
      text: "Lorem ipsum dolor isi amen conseciour oric the laatgin vivesd viva la vida cold play is the music",
    },
    {
      image: ChooseMeals,
      tittle: "Choose How Often",
      text: "Lorem ipsum dolor isi amen conseciour oric the ",
    },
    {
      image: DeliveryMeals,
      tittle: "Fast Deliveries",
      text: "Lorem ipsum dolor isi amen conseciour oric the laatgin vivesd viva la vida cold play is the music.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut
          perferendis quisquam itaque totam sit alias sint?
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
              <h2>{data.tittle}</h2>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
