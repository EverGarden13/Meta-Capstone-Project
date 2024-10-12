import React from 'react';
import menuImage from '../assets/menu.jpg';

const Menu = () => {
  return (
    <div className="menu">
      <img src={menuImage} alt="Menu" className="menu-image" />
      <h1>Our Menu</h1>
      <p>Explore our delicious dishes. We offer a wide range of appetizers, main courses, and desserts to satisfy your taste buds.</p>
    </div>
  );
};

export default Menu;