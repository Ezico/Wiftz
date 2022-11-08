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
        items: 4,
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
          <Link to="/podcasts">
            <button class="secondary btn large">View all Episodes</button>
          </Link>
        </div>

        <div className=" pt-90">
          <OwlCarousel className="owl-theme hide-small" {...options}>
            {topList.map((item) => (
              <div className="pod-content" key={item.id}>
                <div className="image-container">
                  <span className="green-overlay"></span>
                  <img
                    src={item.FeatureImage}
                    alt={item.title}
                    className="pod-content-img"
                  />
                </div>
                <h3 className="title">{item.title}</h3>
                <p className="podcast-desc">
                  {item.shortDescription.substring(0, 140)}
                </p>
                <img className="play-ico" src={Play} alt="" />{" "}
                <Link className="ptx-10" to={`/podcast/${item.id}`}>
                  Listen to this podcast
                </Link>
              </div>
            ))}
          </OwlCarousel>
          <div className="row hide-large">
            {topList.map((item) => (
              <div className="col-md-12">
                <div className="pod-content" key={item.id}>
                  <div className="image-container">
                    <span className="green-overlay"></span>
                    <img
                      src={item.FeatureImage}
                      alt={item.title}
                      className="pod-content-img"
                    />
                  </div>
                  <h3 className="title">{item.title}</h3>
                  <p className="podcast-desc">
                    {item.shortDescription.substring(0, 140)}
                  </p>
                  <img className="play-ico" src={Play} alt="" />{" "}
                  <Link className="ptx-10" to={`/podcast/${item.id}`}>
                    Listen to this podcast
                  </Link>
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
