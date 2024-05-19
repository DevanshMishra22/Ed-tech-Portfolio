import React from "react";
import "../styles/Card.css";
import { FaStar } from "react-icons/fa6";
import photo1 from "../assets/user1.jpg";
import photo2 from "../assets/user2.jpg";
import photo3 from "../assets/user3.jpg";
import photo4 from "../assets/user4.jpg";

const Card = () => {
  return (
    <div className="conatiner_swiper">
      <span className="profile">
        <img src={photo1} alt="" />
      </span>

      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h4>Henry Smith</h4>
      <p className="content_swiper">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        fuga nisi, eveniet aliquam necessitatibus, amet dolorem distinctio
        exercitationem tenetur delectus sapiente beatae earum.
      </p>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="conatiner_swiper">
      <span className="profile">
        <img src={photo2} alt="" />
      </span>

      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h4>Mard Wood</h4>

      <p className="content_swiper">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        fuga nisi, eveniet aliquam necessitatibus, amet dolorem distinctio
        exercitationem tenetur delectus sapiente beatae earum.{" "}
      </p>
    </div>
  );
};
const Card3 = () => {
  return (
    <div className="conatiner_swiper">
      <span className="profile">
        <img src={photo3} alt="" />
      </span>

      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h4>Steve Carlos</h4>

      <p className="content_swiper">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        fuga nisi, eveniet aliquam necessitatibus, amet dolorem distinctio
        exercitationem tenetur delectus sapiente beatae earum.
      </p>
    </div>
  );
};
const Card4 = () => {
  return (
    <div className="conatiner_swiper">
      <span className="profile">
        <img src={photo4} alt="" />
      </span>

      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h4> Emiliy Parker</h4>

      <p className="content_swiper">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio
        fuga nisi, eveniet aliquam necessitatibus, amet dolorem distinctio
        exercitationem tenetur delectus sapiente beatae earum.
      </p>
    </div>
  );
};

export { Card, Card2, Card3, Card4 };
