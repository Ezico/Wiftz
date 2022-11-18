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
    <section className="">
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
                <a href="https://open.spotify.com/show/4PHMvcu3aqIEEa4NX89TFl?si=492d2aa13a0e4846">
                  <img src={Sportify} alt="Sportify" />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <a href="https://podcasts.apple.com/gb/podcast/wiftz-podcast/id1644619451">
                  <img src={Apple} alt="Apple" />
                </a>
              </div>
              <div className="col-md-4 sm-thumbnail">
                <a href="https://amzn.eu/d/7ipmppy">
                  <img src={Amazone} alt="Amazone" />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3dpZnR6L2ZlZWQueG1s?sa=X&ved=0CAMQ9sEGahcKEwjw78fN8bP7AhUAAAAAHQAAAAAQWg">
                  <img src={Google} alt="Sportify" />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <a href="https://wiftz.podbean.com/">
                  <img src={Podbean} alt="Podbean" />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 sm-thumbnail">
                <a href="https://www.youtube.com/@thewiftz">
                  <img src={Youtube} alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe"></div>
      </div>
      <div className="pt-90"></div>
    </section>
  );
};

export default Subscribe;
