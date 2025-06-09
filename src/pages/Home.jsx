import About from './About';
import Contact from './Contact';
import Works from './Works';
import Footer from '../component/Footer'; 
import Layout from "../component/Layout"; 
import Scroll from "../component/Scroll"; 

const title = "TETSUHIRO MUNEYUKI";
const subtitle = "IT IS A WEB DEVELOPER'S PORTFOLIO.";

function Home() {
  return (
    <Layout>
      <div className="main-visual">
        <Scroll />
        <div>
          <h1 style={{lineHeight: '1.2'}} className="main-visual__title">
            {title.split("").map((char, index) => (
              <span key={index}>
                {char}
              </span>
            ))}
            <span className="main-visual__subtitle">
              {subtitle}
            </span>
          </h1>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
}

export default Home;
