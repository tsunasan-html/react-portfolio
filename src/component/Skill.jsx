import React, { useEffect, useRef } from "react";
import "../assets/css/Skill.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaGithub,
  FaPhp,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiGoogleappsscript,
  SiSass,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd
} from "react-icons/si";

const ICONS = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <SiSass />, label: "SCSS" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <FaVuejs />, label: "Vue.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiGoogleappsscript />, label: "GAS" },
  { icon: <FaPhp />, label: "PHP" },
  { icon: <FaAws />, label: "AWS" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <SiAdobexd />, label: "XD" },
  { icon: <SiAdobeillustrator />, label: "Illustrator" },
  { icon: <SiAdobephotoshop />, label: "Photoshop" },
  { icon: <SiAdobepremierepro />, label: "Premiere Pro" },
];

export default function Skill() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    // ★ ヘッダー分を上から差し引き、判定をゆるめる
    const observerConfig = {
      threshold: 0.2,
      rootMargin: "0px 0px -20% 0px",
    };

    // Title observer
    const title = root.querySelector(".content__title");
    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // rAFで1フレーム遅らせ、初期スタイル適用後にトランジション開始
        requestAnimationFrame(() => {
          entry.target.classList.add("visible");
          titleObserver.unobserve(entry.target);
        });
      }
    }, observerConfig);
    if (title) titleObserver.observe(title);

    // Grid observer（子アイコンはまとめて可視化）
    const grid = root.querySelector(".icon-grid");
    const gridObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          grid.classList.add("is-visible");
          gridObserver.unobserve(grid);
        });
      }
    }, observerConfig);
    if (grid) gridObserver.observe(grid);

    // スタッガー設定
    const iconEls = Array.from(root.querySelectorAll(".icon-item"));
    iconEls.forEach((el, i) => {
      el.style.setProperty("--stagger", `${i * 60}ms`);
    });

    // ★ フォールバックは IO 非対応環境だけ（早期発火を防ぐ）
    let fallback;
    if (!("IntersectionObserver" in window)) {
      fallback = setTimeout(() => {
        grid?.classList.add("is-visible");
        title?.classList.add("visible");
      }, 1500);
    }

    return () => {
      if (fallback) clearTimeout(fallback);
      if (title) titleObserver.unobserve(title);
      if (grid) gridObserver.unobserve(grid);
    };
  }, []);

  return (
    <section className="skill-section content" ref={sectionRef}>
      <div className="content_inner">
        <h2 className="content__title">SKILLS</h2>

        <div className="icon-grid">
          {ICONS.map((s, i) => (
            <div
              key={i}
              className="icon-item"
              title={s.label}
              aria-label={s.label}
              role="img"
            >
              {s.icon}
              <span className="icon-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
