import html from "../assets/img/skills/html.svg";
import css from "../assets/img/skills/css.svg";
import javascript from "../assets/img/skills/javascript.svg";
import react from "../assets/img/skills/react.svg";
import bootstrap from "../assets/img/skills/bootstrap.svg";
import sass from "../assets/img/skills/sass.svg";
import tailwind from "../assets/img/skills/tailwind.svg";
import firebase from "../assets/img/skills/firebase.png";
import redux from "../assets/img/skills/redux.svg";
import typescript from "../assets/img/skills/typescript.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My technical level</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="htmlImage" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="cssImage" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascriptImage" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="reactImage" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="firebaseImage" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrapImage" />
                  <h5>BootStrap</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="sassImage" />
                  <h5>Sass</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="tailwindImage" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="reduxImage" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="typescriptImage" />
                  <h5>TypeScript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorSharpImage"
      />
    </section>
  );
};
