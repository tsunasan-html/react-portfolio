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
              これまでWeb制作会社で約5年間コーディングに携わり、<br />
              現在はWebエンジニアとしてフロントエンド開発を中心に業務を行っています。
              <br /><br />
              フロントエンド開発では、主にバックエンドとのAPI連携を担当しています。<br />
              将来的には、こうした経験にデザインスキルを掛け合わせ、幅広く対応できるエンジニアを目指しています。
              <br /><br />
              学習ログや制作したPortfolioの詳細は、WantedlyやBlogで発信しています。<br className="line-break" />
              よろしければご覧いただけますと幸いです。
              <br /><br />

              Vue2、Vue3、React、AWS を中心に技術力を高めています。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
