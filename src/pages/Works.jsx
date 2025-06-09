import React, { useState, useEffect } from 'react';
import '../assets/css/Works.css';
import { Link } from 'react-router-dom';

import works01 from '../assets/images/works01/img01.png';
import works02 from '../assets/images/works02/img01.png';
import works03 from '../assets/images/works03/img01.png';
import works04 from '../assets/images/works04/img01.png';
import works05 from '../assets/images/works05/img01.png';
import worksComingSoon from '../assets/images/coming-soon.png';

function Works() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isH2Visible, setIsH2Visible] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const h2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
        }
      },
      { threshold: 0.5 }
    );

    const titleElement = document.querySelector('.content__title');
    const imageElements = document.querySelectorAll('.works_listItem_eyecatch');
    const h2Elements = document.querySelectorAll('.works_title');  

    if (titleElement) titleObserver.observe(titleElement);
    imageElements.forEach((el) => imageObserver.observe(el));
    h2Elements.forEach((el) => h2Observer.observe(el)); 

    return () => {
      if (titleElement) titleObserver.unobserve(titleElement);
      imageElements.forEach((el) => imageObserver.unobserve(el));
      h2Elements.forEach((el) => h2Observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="l-content content">
        <div className="l-content_inner content_inner">
          <section className="content__works">
            <h1 className={`content__title ${isTitleVisible ? 'visible' : ''}`}>PORTFOLIO</h1>
            <ul className="works_list">
              <li className="works_listItem">
                <Link to="https://price-tools.vercel.app/" target="_blank" className="">
                  <img 
                    src={works01} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className={`works_title ${isH2Visible ? 'visible' : ''}`}>Pricing Tools / React Portfolio</h2>
                  </div>
                </Link>
              </li>
              <li className="works_listItem">
                <Link to="https://vocabulary-practice-xi.vercel.app/" target="_blank" className="">
                  <img
                    src={works02} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className={`works_title ${isH2Visible ? 'visible' : ''}`}>TOEIC Quiz App / React Portfolio</h2>
                  </div>
                </Link>
              </li>
              <li className="works_listItem">
                 <Link to="https://nextjs-pokeapi.vercel.app/" target="_blank" className="">
                   <img 
                     src={works04} 
                     className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                     alt="" 
                   />
                   <div className="works_listItem_textblock">
                     <h2 className={`works_title ${isH2Visible ? 'visible' : ''}`}>PokéAPI SSR + CSR / Next.js Portfolio</h2>
                   </div>
                 </Link>
               </li>
                <li className="works_listItem">
                 <Link to="https://notion-blog-nu-dun.vercel.app/" target="_blank" className="">
                   <img 
                     src={works05} 
                     className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                     alt="" 
                   />
                   <div className="works_listItem_textblock">
                     <h2 className={`works_title ${isH2Visible ? 'visible' : ''}`}>Notion API Blog / Next.js Portfolio</h2>
                   </div>
                 </Link>
               </li>
               {/* <li className="works_listItem">
                  <Link to="/works" target="_blank" className="">
                    <img 
                      src={worksComingSoon} 
                      className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                      alt="" 
                    />
                    <div className="works_listItem_textblock">
                      <h2 className={`works_title ${isH2Visible ? 'visible' : ''}`}>Coming Soon...</h2>
                    </div>
                  </Link>
                </li> */}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Works;
