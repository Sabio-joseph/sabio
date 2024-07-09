import "./About.css";
import Navbar from "./Navbar";
import IMAGES from "./img/JOS4.jpg"

const About = () => {
  return (
    <div>
      <Navbar />
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={IMAGES} alt="" />
            </div>
            <div className="slide-left col-lg-6">
              <h2 className="display-2 fw-bold text-black">About</h2>
              <p className="text-black">This is just me</p>
              <p className="text-black">"Keep your face to the sunshine and you cannot see a shadow."</p>
              <a href="#work" className="btn btn-brand text-black">See My Work</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
