import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const PodcastDetails = () => {
  const [screen, setScreen] = useState();
  const { id } = useParams();
  const [podcast, setPodcast] = useState();
  useEffect(() => {
    id && getPodcastDetails();
  }, [id]);

  useEffect(() => {
    if (window.screen.availWidth < 760) {
      setScreen("Mobile");
    } else {
      setScreen("DesKtop");
    }
  });
  const getPodcastDetails = async () => {
    const docRef = doc(db, "Podcasts", id);
    const podcastDetail = await getDoc(docRef);
    setPodcast(podcastDetail.data());
  };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log(podcast);
  const bds = podcast?.behindTheScene;
  console.log(bds);
  return (
    <>
      <Header />
      <div
        className="heroPD"
        style={{
          backgroundImage: `url(${
            screen == "Mobile"
              ? "https://firebasestorage.googleapis.com/v0/b/wiftz-podcasts.appspot.com/o/podcastdetailsbg.png?alt=media&token=410f464e-75b7-4b7d-9be0-7b334b0e060a "
              : "https://previews.dropbox.com/p/thumb/ABuVn4gFQkygvWN0CNXGx8BCHWwvDl3u4yW2LzfwenWsEVqEYCFBSXdRKJPqmKjI8QywZqsOREb6ZNQRQcL8hTdZlKxAthN3Is6o0z4nVPb6DggxQw0ynPJDKFuoaPrXNZdUvlvABfARcgVZVyQlUL2dlBgeYtKw_Y11fuCNIJyNa3SuESyCvgeWamJwEYYtuOSR5c9_dXNKzLrSQyfsC0z7gj6QeUhqhKr1OZb5nMdMruPt-1yoosSdN--yPdiztOAhphP4dr1XZL2ARGUdTiwJ3Iy3Lt7BEYuqn0wY_Hv2r9Hi4rk8_jtsz0Qb0rs9Xh3RLgy8fH0VlozYQmn0nTnDV5LntpC9ccblYohEBHFSMBR4KMNVjbz0OYZPvbk5sxo/p.png"
          })`,
        }}
      >
        <div className="container innerPodcast">
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
              <div className="">
                <h3 className="podcast-title text-light">{podcast?.title}</h3>
                <p className="podcast-desc">
                  <div
                    className="text-light"
                    dangerouslySetInnerHTML={{
                      __html: podcast?.shortDescription.substring(0, 210),
                    }}
                  />
                </p>
                <br />
                <button className="btn secondary">Listen or Watch on</button>
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

      <section className="container">
        <div className="innerContent">
          <div className="heading text-light">Description</div>
          <div
            className="text-light"
            dangerouslySetInnerHTML={{
              __html: podcast?.description,
            }}
          />
          <br />
          <div className="heading text-light">Resources</div>
          <div
            className="text-light"
            dangerouslySetInnerHTML={{
              __html: podcast?.resources,
            }}
          />
          <br />
          <div className="heading text-light">Behind the Scene</div>
          <br />
        </div>
      </section>
      <section className="bg-secondary">
        <div className="container">
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
        </div>
      </section>
      <Subscribe />
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
