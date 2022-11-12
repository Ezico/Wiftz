import React, { useEffect, useState } from "react";
import apple from "../assets/images/apple_small.png";
import google from "../assets/images/google_small.png";
import pod from "../assets/images/podbean_small.png";
import spotify_small from "../assets/images/sportify_small.png";
import amazon from "../assets/images/amazon_small.png";
import youtube from "../assets/images/youtube_small.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Play from "../assets/images/play.png";
import Subscribe from "../components/Subscribe";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const PodcastPage = ({ featured }) => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [selected, setSelected] = useState([]);
  const [pagedata, setPageData] = useState();
  const [active, setActive] = useState(null);
  const id = "XvIKnYXnCJQ161PRXBqI";
  useEffect(() => {
    setActive("Podcasts");
    id && getPageDataFromDB();
  }, [id]);
  const getPageDataFromDB = async () => {
    const docRef = doc(db, "PodcastDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setPageData({ ...snapshot.data() });
    }
  };

  useEffect(() => {
    const getData = async (e) => {
      let topList = [];
      let tags = [];
      const Podcasts = query(collection(db, "Podcasts"));
      const querySnapshot = await getDocs(Podcasts);
      querySnapshot.forEach((doc) => {
        topList.push({ id: doc.id, ...doc.data() });
        tags.push(doc.data().category);
      });
      const uniqueTags = [...new Set(tags)];

      setData(topList);
      setSelected(uniqueTags[0]);
      setTags(uniqueTags);
    };
    getData();
  }, []);
  // setSelected("All");
  const handleTagSelect = async (e) => {
    const targetText = e.target.innerText;
    // e.target.classList.add("active");
    setSelected(targetText);
    const loopTags = document.querySelectorAll(".tags");
    for (let i = 0; i < loopTags.length; i++) {
      loopTags[i].classList.remove("clicked");
      console.log(loopTags[i]);
      if (loopTags[i].innerText === targetText) {
        loopTags[i].classList.add("clicked");
      }
    }

    const collectionRef = collection(db, "Podcasts");

    if (targetText === "All") {
      const topQuerry = query(collectionRef);
      onSnapshot(
        topQuerry,
        (snapshot) => {
          let topList = [];
          snapshot.docs.forEach((doc) => {
            topList.push({ id: doc.id, ...doc.data() });
            setData(topList);
          });
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("All");
    } else {
      const topQuerry = query(
        collectionRef,
        where("category", "==", targetText)
      );
      onSnapshot(
        topQuerry,
        (snapshot) => {
          let topList = [];
          snapshot.docs.forEach((doc) => {
            topList.push({ id: doc.id, ...doc.data() });
            setData(topList);
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header active={active} />
      <div className="heroP">
        <div className="wrapper">
          <br />
          <img
            className="hide-large"
            style={{ position: "absolute", top: "80px" }}
            src="https://firebasestorage.googleapis.com/v0/b/wiftz-podcasts.appspot.com/o/bg.png?alt=media&token=361ef195-bb96-479b-819f-9750d056bea9"
          />
          <div className="pt-200"></div>
          <div className="hero-contentP">
            <h2>{pagedata?.PodcastheadLine}</h2>
            <p className="text-light">{pagedata?.PodcastsubHeading}</p>
          </div>
        </div>
      </div>
      <div className="wrapper custom-position">
        <div className="featured-high" style={{ backgroundColor: "#0D0E18" }}>
          <div className=" latest-podcast  pt-20">
            <div className="wrapper ">
              <div className="latest-container">
                <h2>Latest Podcast</h2>
                <p className="text-light">
                  Do the talking, while we help you earn. Do the talking, while
                  we help you earn. Do the talking, while we help you earn.
                </p>
              </div>
              <hr style={{ border: "1px solid #404253" }} />
              <div className="row pt-50" style={{ margin: "0" }}>
                {featured.map((item) => (
                  <>
                    <div className="col-md-4 col-sm-12">
                      <Link to={"/podcast/" + item.id}>
                        <img
                          className="thumbnail"
                          src={item?.FeatureImage}
                          alt="podcast"
                        />
                      </Link>
                    </div>
                    <div className="col-md-8 col-sm-12 p-10">
                      <div className="">
                        <h3 className="podcast-title text-light">
                          {item?.title}
                        </h3>
                        <p className="podcast-desc">
                          <div
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: item?.shortDescription.substring(0, 210),
                            }}
                          />
                        </p>
                        <br />
                        <button className="btn secondary featured">
                          Listen or Watch on
                        </button>
                        <br />
                        <div className="medias row">
                          {item.sportify ? (
                            <div className="col-md-4 col-sm-6 sm-thumbnail">
                              <a href={item.sportify}>
                                <img className="" src={spotify_small} alt="" />
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.apple ? (
                            <div className="col-md-4 col-sm-6 sm-thumbnail">
                              <a href={item.apple}>
                                <img className="" src={apple} alt="" />
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.amazon ? (
                            <div className="col-md-4 col-sm-6 sm-thumbnail">
                              <a href={item.amazon}>
                                <img className="" src={amazon} alt="" />
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.google ? (
                            <div className="col-md-4 col-sm-6 sm-thumbnail">
                              <a href={item.google}>
                                <img className="" src={google} alt="" />
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.pod ? (
                            <div className="col-md-4 col-sm-6 sm-thumbnail">
                              <a href={item.pod}>
                                <img className="" src={pod} alt="" />
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.youtube ? (
                            <div className="col-md-4 col-sm-6 sm-thumbnail">
                              <a href={item.youtube}>
                                <img className="" src={youtube} alt="" />
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className=" latest-podcast ">
          <div className="pt-90">
            <div className="latest-container">
              <h2>
                {pagedata?.PodcastsubHeadLine} |&nbsp;
                <span style={{ color: "#585AA8" }}>{selected}</span>
              </h2>
              <p className="text-light">
                Do the talking, while we help you earn. Do the talking, while we
                help you earn. Do the talking, while we help you earn.
              </p>
            </div>
            <div className="tag  scroll-h">
              <button className="tags clicked" onClick={handleTagSelect}>
                All
              </button>
              {tags?.map((tag, index) => (
                <button className="tags" key={index} onClick={handleTagSelect}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="row pt-10 container">
              {data?.map((data, index) => (
                <div key={index} className="x-4 col-sm-12 pod-content">
                  <div className="image-container">
                    <span className="green-overlay"></span>
                    <img
                      src={data.FeatureImage}
                      alt={data.title}
                      className="pod-content-img"
                    />
                  </div>
                  <h3 className="title ">{data?.title}</h3>
                  <p className="podcast-desc">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.shortDescription.substring(0, 210),
                      }}
                    />
                  </p>
                  <img className="play-ico" src={Play} alt="" />
                  <Link className="ptx-10" to={"/podcast/" + data.id}>
                    Listen to this podcast
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};

export default PodcastPage;
