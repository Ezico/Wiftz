import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";

import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialPodcastState = {
  PodcastheadLine: "",
  PodcastsubHeading: "",
  PodcastsubHeadLine: "",
  PodcastsubHeadlineText: "",
};
const initialBlogState = {
  BlogheadLine: "",
  BlogsubHeading: "",
  BlogsubHeadLine: "",
  BlogsubHeadlineText: "",
};

const PostPageEditor = ({ user, handleLogout }) => {
  const [form, setForm] = useState(initialPodcastState);
  const [Blogform, setBlogForm] = useState(initialBlogState);
  const {
    PodcastheadLine,
    PodcastsubHeading,
    PodcastsubHeadLine,
    PodcastsubHeadlineText,
  } = form;

  const { BlogheadLine, BlogsubHeading, BlogsubHeadLine, BlogsubHeadlineText } =
    Blogform;

  const podcastId = "XvIKnYXnCJQ161PRXBqI";
  const BlogId = "tjHV4GSUrph8aGt8Rj0x";
  useEffect(() => {
    podcastId && getPodcastDetail();
  }, [podcastId]);

  const getPodcastDetail = async () => {
    const docRef = doc(db, "PodcastDetails", podcastId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  };

  useEffect(() => {
    BlogId && getBlogDetails();
  }, [BlogId]);

  const getBlogDetails = async () => {
    const docRef = doc(db, "BlogDetails", BlogId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setBlogForm({ ...snapshot.data() });
    }
  };
  const navigate = useNavigate();

  const PodcasthandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const BloghandleChange = (e) => {
    setBlogForm({ ...Blogform, [e.target.name]: e.target.value });
    console.log(Blogform);
  };

  const PodcasthandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, "PodcastDetails", podcastId), {
        ...form,
        timestamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
      });
      toast.success("Post Updated Successfully");
    } catch (err) {
      console.log(err);
    }

    navigate("/admin/podcasts/editor");
  };

  const BloghandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, "BlogDetails", BlogId), {
        ...Blogform,
        timestamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
      });
      toast.success("Updated Created Successfully");
    } catch (err) {
      console.log(err);
    }
    navigate("/admin/podcasts/editor");
  };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />

      <div
        className="wrapperx d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="row">
          {/* podcast data update */}

          <div className="col">
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
              <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
                <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                  <div className=" p-10">
                    <div className="text-center mb-11">
                      <h1 className=" text-light fw-bolder mb-3">
                        Podcast Page Content
                      </h1>
                    </div>

                    <form className="" onSubmit={PodcasthandleSubmit}>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Header Title"
                            name="PodcastheadLine"
                            autocomplete="off"
                            value={PodcastheadLine}
                            className="form-control"
                            onChange={PodcasthandleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Sub Heading"
                            name="PodcastsubHeading"
                            autocomplete="off"
                            value={PodcastsubHeading}
                            className="form-control"
                            onChange={PodcasthandleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Second Title"
                            name="PodcastsubHeadLine"
                            autocomplete="off"
                            value={PodcastsubHeadLine}
                            className="form-control"
                            onChange={PodcasthandleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="second sub-title"
                            name="PodcastsubHeadlineText"
                            autocomplete="off"
                            value={PodcastsubHeadlineText}
                            className="form-control"
                            onChange={PodcasthandleChange}
                          />
                        </div>
                      </div>

                      <div className="d-grid mb-10">
                        <button
                          type="submit"
                          id="kt_sign_in_submit"
                          className="btn btn-primary"
                        >
                          {/* <!--begin::Indicator label--> */}
                          <span className="indicator-label">Update</span>
                          {/* <!--end::Indicator label--> */}
                          {/* <!--begin::Indicator progress--> */}

                          {/* <!--end::Indicator progress--> */}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog data update */}
          <div className="col">
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
              <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
                <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                  <div className="p-10">
                    <div className="text-center mb-11">
                      <h1 className=" text-light fw-bolder mb-3">
                        Blog Page Content
                      </h1>
                    </div>

                    <form className="" onSubmit={BloghandleSubmit}>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Header Title"
                            name="BlogheadLine"
                            autocomplete="off"
                            value={BlogheadLine}
                            className="form-control"
                            onChange={BloghandleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Sub Heading"
                            name="BlogsubHeading"
                            autocomplete="off"
                            value={BlogsubHeading}
                            className="form-control"
                            onChange={BloghandleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Second Title"
                            name="BlogsubHeadLine"
                            autocomplete="off"
                            value={BlogsubHeadLine}
                            className="form-control"
                            onChange={BloghandleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="second sub-title"
                            name="BlogsubHeadlineText"
                            autocomplete="off"
                            value={BlogsubHeadlineText}
                            className="form-control"
                            onChange={BloghandleChange}
                          />
                        </div>
                      </div>

                      <div className="d-grid mb-10">
                        <button
                          type="submit"
                          id="kt_sign_in_submit"
                          className="btn btn-primary"
                        >
                          {/* <!--begin::Indicator label--> */}
                          <span className="indicator-label">Update</span>
                          {/* <!--end::Indicator label--> */}
                          {/* <!--begin::Indicator progress--> */}

                          {/* <!--end::Indicator progress--> */}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminContent user={user} />
    </>
  );
};

export default PostPageEditor;
