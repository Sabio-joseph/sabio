import "./Home.css";
import Navbar from "./Navbar";
import myImage from './img/JOS2.jpg';

const Home = () => {
  return (
    <>
      <Navbar />


      <div className="wrapper">
        <div className="overlay">
          <div className="container1">

            <div id="home-info" >
              <div className="container mt-5">
                <div className="row ok">
                  <div className="col-lg-6">
                  <img src={myImage} alt="" />
                  </div>
                  <div className="col-lg-6 jao">
                    <div className="card">
                      <h2 className=" fw-bold display-3 text-center text-black mb-5">
                      <br /> I'M JOSEPH B. SABIO
                      </h2>
                      <h4 className=" text-black text-center mt-5">BACHELOR OF SCIENCE INFORMATION TECHNOLOGY </h4>
                      <center>
                        <a href="/about" className="btn shadow mt-5 fw-bold">
                          Explore More
                        </a>
                      </center>
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

export default Home;
