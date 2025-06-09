import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/HeaderSp.css';

const HeaderSp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const location = useLocation();
   
  useEffect(() => {
    setSkipAnimation(false);
  }, [location]);  

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLinkClick = () => {
    setSkipAnimation(true);
    setIsChecked(false); 
  };

  return (
    <div className="outer-menu">
      <input 
        className="checkbox-toggle" 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleToggle} 
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className={`menu ${skipAnimation ? 'skip-animation' : ''}`}>
        <div>
          <div>
            <ul>
              <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
              <li><Link to="/about/" onClick={handleLinkClick}>ABOUT</Link></li>
              <li><Link to="/portfolio/" onClick={handleLinkClick}>PORTFOLIO</Link></li>
              <li><Link to="/contact/" onClick={handleLinkClick}>CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSp;
