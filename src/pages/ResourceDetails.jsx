import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Behind from "../assets/images/behind.png";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ResourceDetails = ({ resourceId }) => {
  const [screen, setScreen] = useState();
  const { id } = useParams();
  const [resources, setResources] = useState();
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [d, setD] = useState();
  const [e, setE] = useState();
  const [f, setF] = useState();
  const [getId, setGetId] = useState();
  const [data, setData] = useState();
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
  }, []);

  useEffect(() => {
    const getData = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "Resources"),
        where("url", "==", id)
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ id: doc.id, ...doc.data() });
      });
      setGetId(resources);
      setResources(...topList);
    };
    getData();
  }, []);

  useEffect(() => {
    const getA = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "A")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setA(topList);
    };
    getA();

    const getB = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "B"),
        where("id", "==", id)
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setB(topList);
    };
    getB();
    const getC = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "C"),
        where("id", "==", id)
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setC(topList);
    };
    getC();
    const getD = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "D"),
        where("id", "==", id)
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setD(topList);
    };
    getD();
    const getE = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "E"),
        where("id", "==", id)
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setE(topList);
    };
    getE();
    const getF = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "F"),
        where("id", "==", id)
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setF(topList);
    };
    getF();
  }, []);

  console.log(b);
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
          <div className="pt-50">
            <h3 className="heading text-light ">A - Z Directory</h3>
            <div className="sort-list">
              <span>A</span> <span>B</span> <span>C</span> <span>D</span>{" "}
              <span>E</span> <span>F</span> <span>G</span> <span>H</span>{" "}
              <span>I</span> <span>J</span> <span>K</span> <span>L</span>{" "}
              <span>M</span> <span>N</span> <span>O</span> <span>P</span>{" "}
              <span>Q</span> <span>R</span> <span>S</span> <span>T</span>{" "}
              <span>U</span> <span>V</span> <span>W</span> <span>X</span>{" "}
              <span>Y</span> <span>Z</span>
            </div>
            <br />
            <div className="row pt-20" style={{ padding: "0 20px" }}>
              {a?.length > 1 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 className="text-light">A</h3>
                    <ul className="resource-list">
                      {a?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">{item?.Text}</li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{`Apply >`}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}

              {b?.length > 1 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 className="text-light">B</h3>
                    <ul className="resource-list">
                      {b?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">{item?.Text}</li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{`Apply >`}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {c?.length > 1 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 className="text-light">C</h3>
                    <ul className="resource-list">
                      {c?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">{item?.Text}</li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{`Apply >`}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {d?.length > 1 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 className="text-light">D</h3>
                    <ul className="resource-list">
                      {d?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">{item?.Text}</li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{`Apply >`}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {e?.length > 1 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 className="text-light">E</h3>
                    <ul className="resource-list">
                      {e?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">{item?.Text}</li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{`Apply >`}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {f?.length > 1 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 className="text-light">F</h3>
                    <ul className="resource-list">
                      {f?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">{item?.Text}</li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{`Apply >`}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
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
