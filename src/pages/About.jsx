import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import ListenOn from "../components/ListenOn";
import AboutDetails from "../components/AboutDetails";
import Footer from "../components/Footer";
import Ico from "../assets/images/icos.png";
import __ from "../assets/images/__.png";
import { db } from "../firebase";
import Modal from "../components/Modal";
import Skeleton from "../components/Skeleton";
import AboutText from "../components/AboutText";

const About = () => {
  const [openModal, setOpenModel] = useState(false);
  const [data, setData] = useState();
  const id = "Cw1TrtdA382NCnAzNcIu";
  const [screen, setScreen] = useState();
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(null);
  // push to top page after loading
  useEffect(() => {
    setActive("About");
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

  const getAboutDataFromDB = async () => {
    setLoading(true);
    const docRef = doc(db, "AboutDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
    setLoading(false);
  };

  // if (loading) {
  //   return <Skeleton />;
  // }
  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModel(false)} />
      <Header active={active} />
      <div
        className="heroA"
        style={{
          backgroundImage: `url(${
            screen == "Mobile" ? data?.heroBannerMobile : data?.bannerImg
          })`,
        }}
      >
        {/* <img className="hero-img" src={Banner} alt="" /> */}
        <div className="wrapper">
          <div className="row">
            <div className="pd-intro col-md-6 col-sm-12 wrapper">
              <div className="hero-content">
                <h2 className="abt-text">
                  {data?.title1}

                  <img className="ahero-tick" src={__} alt="tick" />
                </h2>
              </div>
              <div
                className="text-content"
                dangerouslySetInnerHTML={{
                  __html: data?.subtitle1,
                }}
              />

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
      <AboutText data={data} />
      <Subscribe />
      <Footer />
    </>
  );
};

export default About;
