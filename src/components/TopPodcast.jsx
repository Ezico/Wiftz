import React from "react";
import Play from "../assets/images/play.png";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const TopPodcast = ({ topList, data }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };
  return (
    <section className="bgb latest-podcast pt-90">
      <div className="container">
        <div className="latest-container">
          <h2>
            {data?.topPodcastHeading} |
            <span style={{ color: "#585AA8" }}> {data?.forTheWeek}</span>
          </h2>
          <p>{data?.topPodcastSubHeading}</p>
          <br />
          <a href="/podcasts">
            <button
              style={{
                borderRadius: "5px",
                height: "42px",
                padding: "10px 20px",
                margin: "0",
              }}
              class="secondary btn large featured"
            >
              View all Episodes
            </button>
          </a>
        </div>

        <div className=" pt-20">
          <OwlCarousel className="owl-theme " {...options}>
            {topList.map((item) => (
              <a className="nol" href={`/podcast/${item.id}`}>
                <div className="pod-content" key={item.id}>
                  <div className="image-container">
                    <span className="green-overlay"></span>

                    <img
                      src={item.FeatureImage}
                      alt={item.title}
                      className="pod-content-img"
                    />
                  </div>
                  <a className="nol" href={`/podcast/${item.id}`}>
                    <h3 className="title">{item.title}</h3>
                  </a>
                  <p className="podcast-desc">
                    {item.shortDescription.substring(0, 140)}
                  </p>
                  <img className="play-ico" src={Play} alt="" />{" "}
                  <a className="ptx-10" href={`/podcast/${item.id}`}>
                    Listen to this podcast
                  </a>
                </div>
              </a>
            ))}
          </OwlCarousel>
          <div className="row hide-large">
            {topList.map((item) => (
              <div className="col-md-12">
                <div className="pod-content" key={item.id}>
                  <div className="image-container">
                    <span className="green-overlay"></span>
                    <a className="nol" href={`/podcast/${item.id}`}>
                      <img
                        src={item.FeatureImage}
                        alt={item.title}
                        className="pod-content-img"
                      />
                    </a>
                  </div>
                  <a className="nol" href={`/podcast/${item.id}`}>
                    <h3 className="title">{item.title}</h3>
                  </a>
                  <p className="podcast-desc">
                    {item.shortDescription.substring(0, 140)}
                  </p>
                  <img className="play-ico" src={Play} alt="" />{" "}
                  <a className="ptx-10" href={`/podcast/${item.id}`}>
                    Listen to this podcast
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPodcast;
