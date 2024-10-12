import React from "react";
import restaurantChefs from "../assets/1.jpg";
import restaurant from "../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h4>Little Lemon</h4>
        <h5>Chicago</h5>
        <p>
          Welcome to Little Lemon, a cozy restaurant located in the heart of Chicago. We pride ourselves on serving delicious dishes made from the freshest ingredients. Our team of talented chefs is dedicated to providing you with an unforgettable dining experience.
        </p>
      </div>
      <div className="owners">
        <img id="chefs" src={restaurantChefs} alt="Chefs" />
        <img id="restaurant" src={restaurant} alt="Restaurant" />
      </div>
    </div>
  );
};

export default About;