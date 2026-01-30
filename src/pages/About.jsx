import React, { useEffect, useState } from 'react';
import '../assets/css/About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="l-content content">
        <div className="l-content_inner content_inner">
          <section className="content__about">
            <h1 className={`about__title animate-on-scroll ${isVisible ? 'visible' : ''}`}>ABOUT</h1>
            <h2 className={`about__name animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              TETSUHIRO MUNEYUKI
              <span className={`about__name-position animate-on-scroll ${isVisible ? 'visible' : ''}`}>WEB DEVELOPER</span>
            </h2>
            <p className={`about__sentence animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              2025年6月よりチケット駆動開発のもと、<br />
              フロントエンドエンジニアとしてアプリケーションの開発に携わっています。
              <br /><br />
              これまでに2社の事業会社で約6年間、<br />
              WebコーダーとしてDOM操作やUI実装を中心に経験してきました。
              <br /><br />
              現在はフロントエンドエンジニアとして、API通信やUX改善などを担い、<br />
              Webサイト制作からアプリケーション開発へと領域を広げています。
              <br /><br />
              学習ログや制作したPortfolioの詳細は、WantedlyやBlogで発信しています。<br className="line-break" />
              よろしければご覧いただけますと幸いです。
              <br /><br />
              また、英語学習にも継続的に取り組んでおり、<br />
              グローバルな開発環境にも対応できるエンジニアを目指しています。<br />
              2026年にはTOEIC800点の達成を目標としています。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
