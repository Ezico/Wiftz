import { React, useEffect } from "react";
import Play from "../assets/images/play.png";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";

const TopPodcast = ({ topList, data, loading }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    arrows: true,
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
          </Link>
        </div>
        <div className="slide-container">
          <div className=" pt-20">
            <Slider {...settings}>
              {topList.map((item) => (
                <Link className="nol" to={`/podcast/${item.id}`}>
                  <div className="pod-content" key={item.id}>
                    <div className="image-container">
                      <span className="green-overlay"></span>

                      <img
                        src={item.FeatureImage}
                        alt={item.title}
                        className="pod-content-img"
                      />
                    </div>
                    <Link className="nol" to={`/podcast/${item.id}`}>
                      <h3 className="title">{item.title}</h3>
                    </Link>
                    <p className="podcast-desc">
                      {item.shortDescription.substring(0, 140)}
                    </p>
                    <img className="play-ico" src={Play} alt="" />{" "}
                    <Link className="ptx-10" to={`/podcast/${item.id}`}>
                      Listen to this podcast
                    </Link>
                  </div>
                </Link>
              ))}
            </Slider>

            <div className="row hide-large">
              {topList.map((item) => (
                <div className="col-md-12">
                  <div className="pod-content" key={item.id}>
                    <div className="image-container">
                      <span className="green-overlay"></span>
                      <Link className="nol" to={`/podcast/${item.id}`}>
                        <img
                          src={item.FeatureImage}
                          alt={item.title}
                          className="pod-content-img"
                        />
                      </Link>
                    </div>
                    <Link className="nol" to={`/podcast/${item.id}`}>
                      <h3 className="title">{item.title}</h3>
                    </Link>
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
      </div>
    </section>
  );
};

export default TopPodcast;
