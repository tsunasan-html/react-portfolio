import React, { useEffect, useRef } from "react";
import "../assets/css/Skill.css";
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaGithub, FaPhp, FaAws } from "react-icons/fa";
import { SiJavascript, SiGoogleappsscript } from "react-icons/si";

const ICONS = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS / SCSS" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <FaVuejs />, label: "Vue.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaPhp />, label: "PHP" },
  { icon: <FaAws />, label: "AWS" },
  { icon: <SiGoogleappsscript />, label: "GAS" },
  { icon: <FaGithub />, label: "GitHub" },
];

export default function Skill() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const observerConfig = { threshold: 0.45 };

    // タイトル
    const title = root.querySelector(".content__title");
    const titleObserver = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) title.classList.add("visible");
    }, observerConfig);
    if (title) titleObserver.observe(title);

    // アイコン（各要素に可視クラス）＋ スタッガー遅延
    const iconEls = Array.from(root.querySelectorAll(".icon-item"));
    const iconObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          iconObserver.unobserve(entry.target);
        }
      });
    }, observerConfig);

    iconEls.forEach((el, i) => {
      // ほんのりディレイ（60ms刻み）
      el.style.setProperty("--stagger", `${i * 60}ms`);
      iconObserver.observe(el);
    });

    return () => {
      if (title) titleObserver.unobserve(title);
      iconEls.forEach((el) => iconObserver.unobserve(el));
    };
  }, []);

  return (
    <section className="skill-section content" ref={sectionRef}>
      <div className="content_inner">
        <h2 className="content__title">SKILLS</h2>

        <div className="icon-grid">
          {ICONS.map((s, i) => (
            <div key={i} className="icon-item" title={s.label}>
              {s.icon}
              <span className="icon-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
