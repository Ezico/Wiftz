import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-scroll";
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
  const [g, setG] = useState();
  const [h, setH] = useState();
  const [i, setI] = useState();
  const [j, setJ] = useState();
  const [k, setK] = useState();
  const [l, setL] = useState();
  const [m, setM] = useState();
  const [n, setN] = useState();
  const [o, setO] = useState();
  const [p, setP] = useState();
  const [q, setQ] = useState();
  const [r, setR] = useState();
  const [s, setS] = useState();
  const [t, setT] = useState();
  const [u, setU] = useState();
  const [v, setV] = useState();
  const [w, setW] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [z, setZ] = useState();
  const [sort, setSort] = useState();
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
      // setGetId(resources);
      setResources(...topList);
    };
    getData();
  }, []);

  useEffect(() => {
    const sort = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push(...doc.data().class);
      });
      const uniqueTags = [...new Set(topList)];
      uniqueTags.sort();
      setSort(uniqueTags);
      // console.log(uniqueTags);
    };
    sort();

    //  const getData = async (e) => {
    //    let topList = [];
    //    let tags = [];
    //    const Podcasts = query(
    //      collection(db, "Podcasts"),
    //      orderBy("date", "asc")
    //    );
    //    const querySnapshot = await getDocs(Podcasts);
    //    querySnapshot.forEach((doc) => {
    //      topList.push({ id: doc.id, ...doc.data() });
    //      tags.push(doc.data().category);
    //    });
    //    const uniqueTags = [...new Set(tags)];

    //    setData(topList);
    //    setSelected(uniqueTags[0]);
    //    setTags(uniqueTags);
    //  };
    //  sortItem();

    const getA = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "A"),
        orderBy("sort", "asc"),
        where("id", "==", id)
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
        where("id", "==", id),
        orderBy("sort", "asc")
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
        where("id", "==", id),
        orderBy("sort", "asc")
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
        where("id", "==", id),
        orderBy("sort", "asc")
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
        where("id", "==", id),
        orderBy("sort", "asc")
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
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setF(topList);
    };
    getF();
    const getG = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "G"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setG(topList);
    };
    getG();
    const getH = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "H"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setH(topList);
    };
    getH();
    const getI = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "I"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setI(topList);
    };
    getI();
    const getJ = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "J"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setJ(topList);
    };
    getJ();
    const getK = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "K"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setK(topList);
    };
    getK();
    const getL = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "L"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setL(topList);
    };
    getL();
    const getM = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "M"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setM(topList);
    };
    getM();
    const getN = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "N"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setN(topList);
    };
    getN();
    const getO = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "O"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setO(topList);
    };
    getO();
    const getP = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "P"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setP(topList);
    };
    getP();
    const getQ = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "Q"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setQ(topList);
    };
    getQ();
    const getR = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "R"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setR(topList);
    };
    getR();
    const getS = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "S"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setS(topList);
    };
    getS();
    const getT = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "T"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setT(topList);
    };
    getT();
    const getU = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "U"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setU(topList);
    };
    getU();
    const getV = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "V"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setV(topList);
    };
    getV();
    const getW = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "W"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setW(topList);
    };
    getW();
    const getX = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "X"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setX(topList);
    };
    getX();
    const getY = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "Y"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setY(topList);
    };
    getY();
    const getZ = async (e) => {
      let topList = [];
      const Resources = query(
        collection(db, "ResourcesItems"),
        where("class", "==", "Z"),
        where("id", "==", id),
        orderBy("sort", "asc")
      );
      const querySnapshot = await getDocs(Resources);
      querySnapshot.forEach((doc) => {
        topList.push({ ...doc.data().data, class: doc.data().class });
      });
      setZ(topList);
    };
    getZ();
  }, []);
  console.log(resources);
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
          <div className="hero-content">
            <h2>{resources?.title}</h2>
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
          <br />
          <div className="pt-50">
            <br />
            <h3 id="" className="heading text-light ">
              A - Z Directory
            </h3>
            <div className="sort-list">
              {sort?.map((item, index) => (
                <span>
                  <Link
                    key={index}
                    to={item}
                    duration={50}
                    offset={-200}
                    spy={true}
                    smooth={true}
                  >
                    {item}
                  </Link>
                </span>
              ))}
            </div>
            <br />
            <div className="row pt-20" style={{ padding: "0 20px" }}>
              {a?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="A" className="text-light">
                      A
                    </h3>
                    <ul className="resource-list">
                      {a?.map((item, index) => (
                        <div className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={`${item?.Link}`}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a target="blank" href={item?.Link}>
                              {item?.buttonName}
                            </a>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}

              {b?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="B" className="text-light">
                      B
                    </h3>
                    <ul className="resource-list">
                      {b?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {c?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="C" className="text-light">
                      C
                    </h3>
                    <ul className="resource-list">
                      {c?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {d?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="D" className="text-light">
                      D
                    </h3>
                    <ul className="resource-list">
                      {d?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {e?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="E" className="text-light">
                      E
                    </h3>
                    <ul className="resource-list">
                      {e?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {f?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="F" className="text-light">
                      F
                    </h3>
                    <ul className="resource-list">
                      {f?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {g?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="G" className="text-light">
                      G
                    </h3>
                    <ul className="resource-list">
                      {g?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {h?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="H" className="text-light">
                      H
                    </h3>
                    <ul className="resource-list">
                      {h?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {i?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="I" className="text-light">
                      I
                    </h3>
                    <ul className="resource-list">
                      {i?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {j?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="J" className="text-light">
                      J
                    </h3>
                    <ul className="resource-list">
                      {j?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {k?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="K" className="text-light">
                      K
                    </h3>
                    <ul className="resource-list">
                      {k?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {l?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="L" className="text-light">
                      L
                    </h3>
                    <ul className="resource-list">
                      {l?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {m?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="M" className="text-light">
                      M
                    </h3>
                    <ul className="resource-list">
                      {m?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {n?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="N" className="text-light">
                      N
                    </h3>
                    <ul className="resource-list">
                      {n?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {o?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="O" className="text-light">
                      O
                    </h3>
                    <ul className="resource-list">
                      {o?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {p?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="P" className="text-light">
                      P
                    </h3>
                    <ul className="resource-list">
                      {p?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {q?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="Q" className="text-light">
                      Q
                    </h3>
                    <ul className="resource-list">
                      {q?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {r?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="R" className="text-light">
                      R
                    </h3>
                    <ul className="resource-list">
                      {r?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {s?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="S" className="text-light">
                      S
                    </h3>
                    <ul className="resource-list">
                      {s?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {t?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="T" className="text-light">
                      T
                    </h3>
                    <ul className="resource-list">
                      {t?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {u?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="U" className="text-light">
                      U
                    </h3>
                    <ul className="resource-list">
                      {u?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {v?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="V" className="text-light">
                      V
                    </h3>
                    <ul className="resource-list">
                      {f?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {w?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="W" className="text-light">
                      W
                    </h3>
                    <ul className="resource-list">
                      {w?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {x?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="X" className="text-light">
                      X
                    </h3>
                    <ul className="resource-list">
                      {x?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {y?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="Y" className="text-light">
                      Y
                    </h3>
                    <ul className="resource-list">
                      {y?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              {z?.length > 0 ? (
                <>
                  <div className=" mb-20 col-md-6 col-s-12">
                    <h3 id="Z" className="text-light">
                      Z
                    </h3>
                    <ul className="resource-list">
                      {z?.map((item, index) => (
                        <li className="row" key={index}>
                          <li className="col list-item">
                            <a target="blank" href={item?.Link}>
                              {item?.Text}
                            </a>
                          </li>
                          <li className="col list-itema">
                            <a href={item?.Link}>{item?.buttonName}</a>
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
