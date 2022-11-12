import React, { useEffect, useState } from "react";
import Ico from "../assets/images/icos.png";
import __ from "../assets/images/__.png";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
function Hero({ data }) {
  const [screen, setScreen] = useState();
  const [openModal, setOpenModel] = useState(false);

  useEffect(() => {
    if (window.screen.availWidth < 760) {
      setScreen("Mobile");
    } else {
      setScreen("DesKtop");
    }
  });
  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModel(false)} />
      <div
        className="hero"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url(${
            screen == "Mobile" ? data?.heroBannerMobile : data?.heroBanner
          })`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="pd-intro col-md-6 col-sm-12">
              <div className="hero-content">
                <h2>
                  {data?.heroHeading}
                  <img className="hero-tick" src={__} alt="tick" />
                </h2>
              </div>

              <p>{data?.heroSubHeading}</p>
              <div className="row btn-container">
                <div className="col-4 ">
                  <button
                    className="primary btn large"
                    onClick={() => setOpenModel(!openModal)}
                  >
                    Listen
                  </button>
                </div>
                <div className="col-8">
                  <Link to="/podcasts">
                    <button className="secondary btn large">
                      Current Episodes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12"></div>
          </div>
          <br />
        </div>
        <img className="ico-img" src={Ico} alt="" />
      </div>
    </>
  );
}

export default Hero;
