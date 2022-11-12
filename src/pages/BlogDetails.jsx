import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";

import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const BlogDetails = () => {
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [posts, setPosts] = useState();
  const [active, setActive] = useState(null);
  useEffect(() => {
    setActive("Blog");
    id && getPodcastDetails();
  }, [id]);

  const getPodcastDetails = async () => {
    const docRef = doc(db, "Posts", id);
    const postDetail = await getDoc(docRef);
    setPosts(postDetail.data());
  };
  // setActive("Blog");
  // console.log(setActive);

  return (
    <>
      <Header active={active} />
      <div
        className="headx"
        style={{
          backgroundImage: `url(${posts?.FeaturedImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <span
          style={{ display: "block" }}
          className="green-overlay-blog"
        ></span>
        <div className="container innerPodcast">
          <div className="row pt-90"></div>
          <div className="row pt-90"></div>
          <center>
            <h1 className="title  innerContent">{posts?.title}</h1>
          </center>
          <div className="row pb-50"></div>
          <div className="row pb-50"></div>
        </div>
      </div>
      <div className="container">
        <div className="custom-position-blog thumbnail">
          <div className="row">
            <div className="col-6 p-10">
              <span className="text-light">
                <strong>
                  <img
                    className="ico"
                    src="https://img.icons8.com/ffffff/file"
                  />
                </strong>
                {posts?.category}
              </span>
              <span className="text-light">
                <strong>
                  <img
                    className="ico"
                    src="https://img.icons8.com/ffffff/user"
                  />
                </strong>
                {posts?.author}
              </span>
            </div>
            <div className="col-6 p-10">
              <span className="text-light">
                <img
                  className="ico"
                  src="https://img.icons8.com/ffffff/clock"
                />
              </span>

              <span className="text-light">
                {posts?.timestamp.toDate().toDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="innerContent text-light">
            <div
              dangerouslySetInnerHTML={{
                __html: posts?.description,
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <Subscribe />
      <Footer />
    </>
  );
};

export default BlogDetails;
