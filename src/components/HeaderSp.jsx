import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/HeaderSp.css';

const HeaderSp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const location = useLocation();
   
  // ルートが変わったら状態リセット（追加）
  useEffect(() => {
    setSkipAnimation(false);
    setIsChecked(false);
  }, [location]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLinkClick = () => {
    setSkipAnimation(true);
    setIsChecked(false); 
  };
  const handleExternalLinkClick = () => {
    setSkipAnimation(false);
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
              <li><Link to="/about" onClick={handleLinkClick}>ABOUT</Link></li>
              <li><Link to="/works" onClick={handleLinkClick}>WORKS</Link></li>
              <li>
                <a
                  href="https://notion-blog-nu-dun.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleExternalLinkClick}
                >
                  BLOG
                </a>
              </li>
              <li><Link to="/contact" onClick={handleLinkClick}>CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSp;
