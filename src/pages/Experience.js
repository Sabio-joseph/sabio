import "./Experience.css";
import Navbar from "./Navbar";
import PC1Image from "./img/JOS4.jpg"
import PC2Image from "./img/JOS3.jpg"
import PC3Image from "./img/JOS1.jpg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
              <div className="exp">
                <div className="container">
                  <hr />
                  <div className="row mb-5">
                    <h3 className="text-center">just a picture</h3>
                    <hr />
                    <div className="col-lg-4">
                    <img src={PC1Image} alt="" />
                      <h4 className="three text-black">ONE</h4>
                    </div>
                    <div className="col-lg-4">
                    <img src={PC2Image} alt="" />
                      <h4 className="three text-black">TWO</h4>
                    </div>
                    <div className="col-lg-4">
                    <img src={PC3Image} alt="" />
                      <h4 className="three text-black">THREE</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Experience;
