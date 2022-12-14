import React from "react";
import apple from "../assets/images/apple_small.png";
import google from "../assets/images/google_small.png";
import pod from "../assets/images/podbean_small.png";
import spotify_small from "../assets/images/sportify_small.png";
import amazon from "../assets/images/amazon_small.png";
import youtube from "../assets/images/youtube_small.png";
import Skeleton from "./Skeleton";

const LatestPodcasts = ({ data, featured, loading, test }) => {
  // const cleanHtml = cleanHtml.replace(/<[^>]+>/g, "");
  if (loading) {
    return <Skeleton />;
  }
  return (
    <section className="bgb latest-podcast pb-90 pt-90">
      <div className="wrapper w-1100">
        <div className="latest-container">
          <h2>{data?.latestPodcastHeading}</h2>
          <p>{data?.latestPodcastSubHeading}</p>
        </div>
        <hr />
        {featured.map((item) => (
          <div key={item.id} className="row pt-30">
            <div className="col-md-4 col-sm-12">
              <a href={`/podcast/${item.url}`}>
                <img
                  className="thumbnail"
                  src={item?.FeatureImage}
                  alt="podcast"
                />
              </a>
            </div>
            <div className="col-md-8 col-sm-12 pt-20">
              <div className="medias">
                <a className="nol" href={`/podcast/${item.url}`}>
                  <h3 className="podcast-title text-light">{item?.title}</h3>
                </a>
                <div className="podcast-desc">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.shortDescription.substring(0, 210),
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="medias">
                <button className="btn secondary featured">
                  Listen or watch on
                </button>
              </div>

              <br />
              <div className="medias row">
                {item.sportify ? (
                  <div className="col-md-4 col-sm-12 sm-thumbnail ">
                    <a href={item.sportify}>
                      <img className="" src={spotify_small} alt="" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {item.apple ? (
                  <div className="col-md-4 col-sm-12  sm-thumbnail">
                    <a href={item.apple}>
                      <img className="" src={apple} alt="" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {item.amazon ? (
                  <div className="col-md-4 col-sm-12  sm-thumbnail">
                    <a href={item.amazon}>
                      <img className="" src={amazon} alt="" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {item.google ? (
                  <div className="col-md-4 col-sm-12  sm-thumbnail">
                    <a href={item.google}>
                      <img className="" src={google} alt="" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {item.pod ? (
                  <div className="col-md-4 col-sm-12  sm-thumbnail">
                    <a href={item.pod}>
                      <img className="" src={pod} alt="" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {item.youtube ? (
                  <div className="col-md-4 col-sm-12  sm-thumbnail">
                    <a href={item.youtube}>
                      <img className="" src={youtube} alt="" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <br />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPodcasts;
