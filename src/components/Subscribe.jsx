import React, { useEffect, useState } from "react";
import Amazone from "../assets/images/Amazon-primary.png";
import Sportify from "../assets/images/Sportify-primary.png";
import Apple from "../assets/images/Apple-primary.png";
import Google from "../assets/images/Google-primary.png";
import Podbean from "../assets/images/Podbean-primary.png";
import Youtube from "../assets/images/Youtube-primary.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Subscribe = () => {
  const [data, setData] = useState();
  const id = "TgcagxHqMIpvRTMnsjU4";
  useEffect(() => {
    id && getHomeDataFromDB();
  }, [id]);

  const getHomeDataFromDB = async () => {
    const docRef = doc(db, "HomeDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };
  return (
    <section className="wrapper">
      <div className="pt-90"></div>
      <div className="wrapper subscribe">
        <div className="subscribe"></div>
        <div className="row aab">
          <div className="col-md-5">
            <div className="s-content">
              <h3 class="podcast-title">{data?.footerTitle}</h3>
              <p className="subscribe-msg">{data?.footerSubTitle}</p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="medias row">
              <div className="col-md-4 col-sm-12 sm-thumbnail ">
                <img src={Sportify} alt="Sportify" />
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <img src={Apple} alt="Apple" />
              </div>
              <div className="col-md-4 sm-thumbnail">
                <img src={Amazone} alt="Amazone" />
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <img src={Google} alt="Sportify" />
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <img src={Podbean} alt="Podbean" />
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <img src={Youtube} alt="Youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-90"></div>
    </section>
  );
};

export default Subscribe;
