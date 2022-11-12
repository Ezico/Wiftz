import React from "react";
import Bg from "../assets/images/AboutBg.png";
import __ from "../assets/images/__.png";
const AboutDetails = ({ data }) => {
  return (
    <>
      <section className="bgb latest-podcast pb-90 pt-90">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="hero-content pt-50">
                <div className="tagline">THE WIFTZ PODCASTS</div>
                <h2>
                  {data?.title2}

                  <img className="ahero-tick2" src={__} alt="tick" />
                </h2>
                <br />
                <p>{data?.subtitle2}</p>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div class="dark p50 mobile-p10">
                <div
                  className="row "
                  style={{
                    backgroundImage: `url(${Bg})`,
                    backgroundSize: "contain",
                  }}
                >
                  <div
                    class="col-md-6 col-sm-12 p0"
                    style={{ padding: "15px 7.5px 7.5px 15px" }}
                  >
                    <img className="banner-thumbnail" src={data?.image1} />
                  </div>
                  <div
                    class="col-md-6 col-sm-12"
                    style={{ padding: "15px 15px 7.5px 7.5px" }}
                  >
                    <img className="banner-thumbnail" src={data?.image2} />
                  </div>
                  <div
                    class="col-md-6 col-sm-12 p0"
                    style={{ padding: "7.5px 7.5px 7.5px 15px" }}
                  >
                    <img className="banner-thumbnail" src={data?.image3} />
                  </div>
                  <div
                    class="col-md-6 col-sm-12 p0"
                    style={{ padding: "7.5px 15.5px 15.5px 7.5px" }}
                  >
                    <img className="banner-thumbnail" src={data?.image4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutDetails;
