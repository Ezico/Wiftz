import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import ListenOn from "../components/ListenOn";
import AboutDetails from "../components/AboutDetails";
import Footer from "../components/Footer";
import BottomBanner from "../components/BottomBanner";
import Ico from "../assets/images/icos.png";
import __ from "../assets/images/__.png";
import { db } from "../firebase";
import Modal from "../components/Modal";

const About = () => {
  const [openModal, setOpenModel] = useState(false);
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const id = "Cw1TrtdA382NCnAzNcIu";
  const id2 = "TgcagxHqMIpvRTMnsjU4";
  const [screen, setScreen] = useState();
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (window.screen.availWidth < 760) {
      setScreen("Mobile");
    } else {
      setScreen("DesKtop");
    }
  });
  useEffect(() => {
    id && getAboutDataFromDB();
  }, [id]);

  useEffect(() => {
    id2 && getBannerDataFromDB();
  }, [id]);

  const getAboutDataFromDB = async () => {
    const docRef = doc(db, "AboutDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };

  const getBannerDataFromDB = async () => {
    const docRef = doc(db, "HomeDetails", id2);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData2({ ...snapshot.data() });
    }
  };

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModel(false)} />
      <Header />
      <div
        className="hero"
        style={{
          backgroundImage: `url(${
            screen == "Mobile" ? data?.heroBannerMobile : data?.bannerImg
          })`,
        }}
      >
        {/* <img className="hero-img" src={Banner} alt="" /> */}
        <div className="container">
          <div className="row">
            <div className="pd-intro col-md-6 col-sm-12">
              <div className="hero-content">
                <h2>
                  {data?.title1}

                  <img className="ahero-tick" src={__} alt="tick" />
                </h2>
              </div>

              <p>{data?.subtitle1}</p>
              <button
                onClick={() => setOpenModel(!openModal)}
                className="primary btn large"
              >
                Listen
              </button>
            </div>
            <div className="col-md-6 col-sm-12"></div>
          </div>
          <br />
        </div>
        <img className="ico-img" src={Ico} alt="" />
      </div>
      <ListenOn />
      <AboutDetails data={data} />
      <BottomBanner data={data2} />
      <Subscribe />
      <Footer data={data2} />
    </>
  );
};

export default About;
