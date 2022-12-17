import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Ico from "../assets/images/icos.png";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import Subscribe from "../components/Subscribe";
import ResourceCategory from "../components/ResourceCategory";

const Resources = () => {
  const [active, setActive] = useState(null);
  const [screen, setScreen] = useState();
  const [pageData, setPageData] = useState();
  const [data, setData] = useState([]);

  const id = "Yo1vL9GrpDHTa4FyZbgd";
  useEffect(() => {
    setActive("Resources");
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
    const docRef = doc(db, "ResourcesDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setPageData({ ...snapshot.data() });
    }
  };
  useEffect(() => {
    const getData = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "Resources"),
        orderBy("date", "desc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ id: doc.id, ...doc.data() });
      });

      setData(topList);
    };
    getData();
  }, []);
  console.log(pageData);
  return (
    <>
      <Header active={active} />
      <div
        className="heroA"
        style={{
          backgroundImage: `url(${
            screen == "Mobile" ? pageData?.banner : pageData?.banner
          })`,
        }}
      >
        {/* <img className="hero-img" src={Banner} alt="" /> */}
        <div className="wrapper">
          <div className="row">
            <div className="pd-intro col-md-6 col-sm-12 wrapper">
              <div className="hero-content">
                <div class="hero-content">
                  <h2 className="abt-text">
                    <div
                      dangerouslySetInnerHTML={{ __html: pageData?.title }}
                    />
                  </h2>
                </div>
              </div>
              <br />
              <div
                className="text-content text-light sct"
                dangerouslySetInnerHTML={{
                  __html: pageData?.subtitle,
                }}
              />
            </div>
            <div className="col-md-6 col-sm-12"></div>
          </div>
          <br />
        </div>
        <img className="ico-img" src={Ico} alt="" />
      </div>
      <ResourceCategory data={data} />
      <div className="" style={{ margin: "20px" }}>
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};

export default Resources;
