import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const BlogPage = ({}) => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [selected, setSelected] = useState([]);
  const [pagedata, setPageData] = useState();
  const [featured, setFeatured] = useState();
  const [active, setActive] = useState(null);
  // push to top page after loading
  useEffect(() => {
    setActive("Blog");
    window.scrollTo(0, 0);
  }, []);

  // setSelected("Technology");
  const id = "tjHV4GSUrph8aGt8Rj0x";
  useEffect(() => {
    id && getPageDataFromDB();
  }, [id]);

  const getPageDataFromDB = async () => {
    const docRef = doc(db, "BlogDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setPageData({ ...snapshot.data() });
    }
  };

  useEffect(() => {
    const getData = async (e) => {
      let topList = [];
      let tags = [];
      const Posts = query(collection(db, "Posts"));
      const querySnapshot = await getDocs(Posts);
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

  // get one post
  useEffect(() => {
    const collectionRef = collection(db, "Posts");
    const featuredQuerry = query(
      collectionRef,
      orderBy("timestamp", "desc"),
      limit(1)
    );

    const unsubx = onSnapshot(
      featuredQuerry,
      (snapshot) => {
        let featuredList = [];
        snapshot.docs.forEach((doc) => {
          featuredList.push({ id: doc.id, ...doc.data() });
        });
        setFeatured(featuredList[0]);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsubx();
    };
  }, []);

  const handleTagSelect = async (e) => {
    const targetText = e.target.innerText;
    setSelected(targetText);
    const loopTags = document.querySelectorAll(".tags");
    for (let i = 0; i < loopTags.length; i++) {
      loopTags[i].classList.remove("clicked");
      console.log(loopTags[i]);
      if (loopTags[i].innerText === targetText) {
        loopTags[i].classList.add("clicked");
      }
    }
    if (targetText === "All") {
      console.log("All");
      const collectionRef = collection(db, "Posts");
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
    } else {
      const collectionRef = collection(db, "Posts");
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
  // setActive("Blog");
  console.log(data);
  return (
    <>
      <Header active={active} />
      <div
        className="heroB"
        style={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/wiftz-podcasts.appspot.com/o/Podcasts%2FBlog%20Banner.png?alt=media&token=093015fd-9dfe-4e82-8a63-0c6bf1a71b19)`,
        }}
      >
        <div className="wrapper">
          <br />
          <div className="pt-200"></div>
          <div className="hero-contentP">
            <h2>{pagedata?.BlogheadLine}</h2>
            <p className="text-light">{pagedata?.BlogsubHeading}</p>
          </div>
        </div>
      </div>
      <section className="bg-secondary pt-50 pb-90">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="thembail-featured">
                <img
                  style={{ borderRadius: "10px" }}
                  className="w-100"
                  src={featured?.FeaturedImage}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="article pt-20">
                <button className="btn date featured">
                  <span>{featured?.category}</span> &nbsp;|&nbsp;
                  <span>{featured?.timestamp.toDate().toDateString()}</span>
                </button>
                <h3
                  className="podcast-title text-light"
                  style={{ marginTop: "20px" }}
                >
                  {featured?.title}
                </h3>
                <p className="podcast-desc">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        featured?.shortDescription.substring(0, 200) + "...",
                    }}
                  />
                </p>
                <br />
                <Link to={"/blog/" + featured?.id} style={{ width: "131px" }}>
                  <button className="btn primary cta">Read More</button>
                </Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-podcast pt-90">
        <div className="wrapper">
          <div className="latest-container">
            <h2>{pagedata?.BlogsubHeadLine}</h2>
            <p className="text-light">{pagedata?.BlogsubHeadlineText}</p>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <div className="tags scroll-h">
          <button className="tags clicked" onClick={handleTagSelect}>
            All
          </button>
          {tags?.map((tag, index) => (
            <button className="tags" key={index} onClick={handleTagSelect}>
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <div className="row wrapper">
          {data?.map((data, index) => (
            <Link
              key={index}
              className="x-4 col-sm-12 pod-content"
              to={"/blog/" + data?.id}
            >
              <div className="image-container">
                <span className="green-overlay"></span>
                <img
                  src={data.FeaturedImage}
                  alt={data?.title}
                  className="pod-content-img"
                />
              </div>
              <h3 className="title ">{data?.title}</h3>
              <p className="podcast-desc">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.shortDescription.substring(0, 120),
                  }}
                />
              </p>
              <br />
              <div
                className="row"
                style={{ position: "absolute", bottom: "10px", width: "100%" }}
              >
                <div
                  style={{
                    paddingTop: "4px",
                    fontSize: "12px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  className="col"
                >
                  {featured?.timestamp.toDate().toDateString()}
                </div>
                <Link className="col ptx-10x" to={"/blog/" + data?.id}>
                  Read More &gt;
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
