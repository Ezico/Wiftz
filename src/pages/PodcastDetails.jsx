import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Header from "../components/Header";
import apple from "../assets/images/apple_small.png";
import google from "../assets/images/google_small.png";
import pod from "../assets/images/podbean_small.png";
import spotify_small from "../assets/images/sportify_small.png";
import amazon from "../assets/images/amazon_small.png";
import youtube from "../assets/images/youtube_small.png";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Behind from "../assets/images/behind.png";

const PodcastDetails = () => {
  const [screen, setScreen] = useState();
  const { id } = useParams();
  const [podcast, setPodcast] = useState();
  const [active, setActive] = useState(null);
  const mystyle = {
    top: "-80px",
    backgroundImage: `url(${
      screen == "Mobile"
        ? "https://firebasestorage.googleapis.com/v0/b/wiftz-podcasts.appspot.com/o/podcastdetailsbg.png?alt=media&token=410f464e-75b7-4b7d-9be0-7b334b0e060a "
        : "https://firebasestorage.googleapis.com/v0/b/wiftz-podcasts.appspot.com/o/HPhO8ygY.png?alt=media&token=9b0f0d24-717b-4145-afbc-bc08dfcea477"
    })`,
  };

  useEffect(() => {
    setActive("Podcasts");
    // id && getPodcastDetails();
  }, [id]);

  useEffect(() => {
    const getData = async (e) => {
      let data = [];
      const PodcastData = query(
        collection(db, "Podcasts"),
        where("url", "==", id)
      );
      const querySnapshot = await getDocs(PodcastData);
      querySnapshot.forEach((doc) => {
        setPodcast({ ...doc.data() });
      });
    };
    getData();
  }, []);

  useEffect(() => {
    if (window.screen.availWidth < 760) {
      setScreen("Mobile");
    } else {
      setScreen("DesKtop");
    }
  });
  console.log(podcast);
  // const getPodcastDetails = async () => {
  //   const docRef = doc(db, "Podcasts", id);
  //   const podcastDetail = await getDoc(docRef);
  //   setPodcast(podcastDetail.data());
  // };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bds = podcast?.behindTheScene;

  return (
    <>
      <Header active={active} />
      <div className="heroPD" style={mystyle}>
        <div className="wrapper innerPodcast">
          <div className="row pt-90"></div>
          <div className="row pt-90 hide-small"></div>

          <div className="row pt-50">
            <div className="col-md-4 col-sm-12">
              <img src={Behind} className="behind-img hide-large" />
              <img
                className="thumbnail"
                src={podcast?.FeatureImage}
                alt="podcast"
              />
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="podcast">
                <h3 className="podcast-title text-light">{podcast?.title}</h3>
                <p className="podcast-desc">
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: podcast?.shortDescription.substring(0, 210),
                    }}
                  /> */}
                </p>
                <br />
                <button class=" secondary featured">Listen or watch on</button>
                <br />
                <div className="medias row">
                  {podcast?.sportify ? (
                    <div className="col-sm-6 col-md-4 sm-thumbnail">
                      <a href={podcast?.sportify}>
                        <img className="" src={spotify_small} alt="" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {podcast?.apple ? (
                    <div className="col-sm-6 col-md-4 sm-thumbnail">
                      <a href={podcast.apple}>
                        <img className="" src={apple} alt="" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {podcast?.amazon ? (
                    <div className="col-sm-6 col-md-4 sm-thumbnail">
                      <a href={podcast?.amazon}>
                        <img className="" src={amazon} alt="" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {podcast?.google ? (
                    <div className="col-sm-6 col-md-4 sm-thumbnail">
                      <a href={podcast?.google}>
                        <img className="" src={google} alt="" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {podcast?.pod ? (
                    <div className="col-sm-6 col-md-4 sm-thumbnail">
                      <a href={podcast?.pod}>
                        <img className="" src={pod} alt="" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {podcast?.youtube ? (
                    <div className="col-sm-6 col-md-4 sm-thumbnail">
                      <a href={podcast?.youtube}>
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
          </div>
        </div>
      </div>

      <section className="wrapper">
        <div className="innerContent">
          <div className="headingx text-light">Description</div>
          <div
            className="text-light"
            dangerouslySetInnerHTML={{
              __html: podcast?.description,
            }}
          />
          <br />
          <br />
          <br />
          <div className="headingx text-light">Resources</div>
          <div
            className="text-light"
            dangerouslySetInnerHTML={{
              __html: podcast?.resources,
            }}
          />
          <br />
          <br />
          <br />
          <div className="headingx text-light">Behind the Scene</div>
          <br />
        </div>
      </section>
      <section className="bg-secondary">
        <div className="wrapper">
          <div className="row">
            {bds?.map((item, index) => (
              <div className="col-md-6 col-sm-12">
                <img
                  className={"w-100 bts h-100" + " " + "imag" + index}
                  key={index}
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </div>
          <Subscribe />
        </div>
      </section>
      <Footer />
    </>
    // <div>
    //   <div className="single">
    //     <div
    //       className="blog-title-box"
    //       style={{ backgroundImage: `url('${podcast?.imgUrl}')` }}
    //     >
    //       <div className="overlay"></div>
    //       <div className="blog-title">
    //         <span>{podcast?.timestamp.toDate().toDateString()}</span>
    //         <h2>{podcast?.title}</h2>
    //       </div>
    //     </div>
    //     <div className="container-fluid pb-4 pt-4 padding podcast-single-content "></div>
    //     <div className="container padding">
    //       <div className="row mx-0">
    //         <div className="col-md-8">
    //           <span className="meta-info text-start">
    //             By <p className="author">{podcast?.author}</p> -&nbsp
    //             {podcast?.timestamp.toDate().toDateString()}
    //           </span>
    //           <div className="text-start">{podcast?.description}</div>
    //           <div className="col-md-3">
    //             <h2>Tags</h2>
    //             <h2>Most Popular</h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PodcastDetails;
