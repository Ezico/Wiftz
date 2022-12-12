import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Behind from "../assets/images/behind.png";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ResourceDetails = () => {
  const [screen, setScreen] = useState();
  const { id } = useParams();
  const [resources, setResources] = useState();
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
    setActive("Resources");
    // id && getPodcastDetails();
  }, [id]);

  useEffect(() => {
    const getData = async (e) => {
      const resourceData = query(
        collection(db, "Resources"),
        where("url", "==", id)
      );
      const querySnapshot = await getDocs(resourceData);
      querySnapshot.forEach((doc) => {
        setResources({ ...doc.data() });
      });
    };
    getData();
  }, []);
  const newlist = [];
  const list = resources?.list;

  return (
    <>
      <Header active={active} />
      <div
        className="heroR"
        style={{
          backgroundImage: `url(${resources?.FeaturedImage})`,
        }}
      >
        <div className="resource-overlay"></div>
        <div className="wrapper">
          <br />

          <img
            className="hide-large"
            style={{ position: "absolute", top: "80px", width: "93%" }}
            src={resources?.featuredImage}
          />
          <div className="pt-200"></div>
          <div className="hero-contentP">
            <h2>{resources?.PodcastheadLine}</h2>
            <p className="text-light">{resources?.PodcastsubHeading}</p>
          </div>
        </div>
      </div>
      <div className="wrapper custom-position">
        <div className="featured-high" style={{ backgroundColor: "#0D0E18" }}>
          <div className=" latest-podcast  pt-20">
            <div className="wrapper ">
              <div className="">
                <p
                  className="text-light"
                  dangerouslySetInnerHTML={{
                    __html: resources?.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="latest-resource">
          <div className="pt-90">
            <h3 className="heading text-light">A - Z Directory</h3>
            <div className="sort-list">
              <span>A</span> <span>B</span> <span>C</span> <span>D</span>{" "}
              <span>E</span> <span>F</span> <span>G</span> <span>H</span>{" "}
              <span>I</span> <span>J</span> <span>K</span> <span>L</span>{" "}
              <span>M</span> <span>N</span> <span>O</span> <span>P</span>{" "}
              <span>Q</span> <span>R</span> <span>S</span> <span>T</span>{" "}
              <span>U</span> <span>V</span> <span>W</span> <span>X</span>{" "}
              <span>Y</span> <span>Z</span>
            </div>

            <div className="row pt-20">
              <div className="col-md-6 col-s-12">
                <h3 className="text-light">A</h3>
                <ul className="resource-list">
                  {list?.map((item, index) => (
                    <li className="row" key={index}>
                      <li className="col list-item">{item}</li>
                      <li className="col list-itema">
                        <a href="/">{item} </a>
                      </li>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Subscribe />
      </div>

      <Footer />
    </>
  );
};

export default ResourceDetails;
