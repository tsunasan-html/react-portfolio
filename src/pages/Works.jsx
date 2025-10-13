import React, { useState, useEffect } from 'react';
import '../assets/css/Works.css';
import worksData from '../data/works.json';
import { Link } from 'react-router-dom';

const imageMap = import.meta.glob('../assets/images/works/*', {
  eager: true,
  as: 'url',
});
const extraImages = import.meta.glob('../assets/images/*', {
  eager: true,
  as: 'url',
});

function Works() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isH2Visible, setIsH2Visible] = useState(false);

  useEffect(() => {
    const observerConfig = { threshold: 0.5 };

    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsTitleVisible(true);
    }, observerConfig);

    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsImageVisible(true);
    }, observerConfig);

    const h2Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsH2Visible(true);
    }, observerConfig);

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

  // ファイル名をURLに変換
  const resolveImage = (fileName) => {
    const found =
      Object.entries(imageMap).find(([path]) => path.endsWith(fileName)) ||
      Object.entries(extraImages).find(([path]) => path.endsWith(fileName));
    return found ? found[1] : '';
  };

  return (
    <div className="l-content content">
      <div className="l-content_inner content_inner">
        <section className="content__works">
          <h1 className={`content__title ${isTitleVisible ? 'visible' : ''}`}>
            WORKS
          </h1>

          <ul className="works_list">
            {worksData.map((work) => {
              const imgSrc = resolveImage(work.image);
              const Wrapper = work.internal ? Link : 'a';
              const props = work.internal
                ? { to: work.url }
                : { href: work.url, target: '_blank', rel: 'noopener noreferrer' };

              return (
                <li className="works_listItem" key={work.title}>
                  <Wrapper {...props} className="">
                    <img
                      src={imgSrc}
                      className={`works_listItem_eyecatch ${
                        isImageVisible ? 'visible' : ''
                      } fadein scrollin`}
                      alt={work.title}
                    />
                    <div className="works_listItem_textblock">
                      <h2
                        className={`works_title ${
                          isH2Visible ? 'visible' : ''
                        }`}
                      >
                        {work.title}
                      </h2>
                    </div>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Works;
