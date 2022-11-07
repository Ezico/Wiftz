import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const initialState = {
  heroHeading: "",
  heroSubHeading: "",
  latestPodcastHeading: "",
  latestPodcastSubHeading: "",
  topPodcastHeading: "",
  topPodcastSubHeading: "",
  footerTitle: "",
  footerSubTitle: "",
  forTheWeek: "",
  heroBanner: "",
  midPageBanner: "",
  heroBannerMobile: "",
};

const HomepageEditor = ({ user, handleLogout }) => {
  const [form, setForm] = useState(initialState);
  const [descriptionvalue, setDescriptionValue] = useState();

  const {
    footerTitle,
    footerSubTitle,
    heroHeading,
    heroSubHeading,
    latestPodcastHeading,
    latestPodcastSubHeading,
    topPodcastHeading,
    topPodcastSubHeading,
    forTheWeek,
    heroBanner,
    midPageBanner,
    heroBannerMobile,
  } = form;

  const id = "TgcagxHqMIpvRTMnsjU4";
  useEffect(() => {
    id && getPolicyDetails();
  }, [id]);

  const getPolicyDetails = async () => {
    const docRef = doc(db, "HomeDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
      setDescriptionValue(snapshot.data().bannerText);
    }
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatedDescrition = "<div>" + descriptionvalue + "</div>";
    let newDoc = {
      ...form,
      bannerText: formatedDescrition,
    };
    console.log(newDoc);

    try {
      await updateDoc(doc(db, "HomeDetails", id), {
        ...newDoc,
        timestamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
      });
      toast.success("Updated Created Successfully");
    } catch (err) {
      console.log(err);
    }

    navigate("/admin");
  };
  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />

      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-75  p-10">
                <div className="card card-custom">
                  <div className="card-header">
                    <div className="card-title">
                      <h1 className=" text-dark fw-bolder mb-3">
                        About Content
                      </h1>
                    </div>
                    <div className="card-toolbar">
                      <Link to="/admin">
                        <button type="button" className="btn btn-sm btn-dark">
                          CANCEL
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body card-scroll">
                    <form className="" onSubmit={handleSubmit}>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Hero Heading"
                            name="heroHeading"
                            autocomplete="off"
                            value={heroHeading}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Hero Sub Heading"
                            name="heroSubHeading"
                            autocomplete="off"
                            value={heroSubHeading}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Latest Podcast Heading"
                            name="latestPodcastHeading"
                            autocomplete="off"
                            value={latestPodcastHeading}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Latest Heading Sub Title"
                            name="latestPodcastSubHeading"
                            autocomplete="off"
                            value={latestPodcastSubHeading}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          {/* <textarea
                            type="text"
                            placeholder="Home Banner Text"
                            name="bannerText"
                            autocomplete="off"
                            value={bannerText}
                            className="form-control"
                            onChange={handleChange}
                          ></textarea> */}
                          <ReactQuill
                            theme="snow"
                            placeheolder="Description"
                            value={descriptionvalue}
                            onChange={setDescriptionValue}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Top Podcast Heading"
                            name="topPodcastHeading"
                            autocomplete="off"
                            value={topPodcastHeading}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="After Heading"
                            name="forTheWeek"
                            autocomplete="off"
                            value={forTheWeek}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Top Podcast Sub Heading"
                            name="topPodcastSubHeading"
                            autocomplete="off"
                            value={topPodcastSubHeading}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>

                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Subscribe Title"
                            name="footerTitle"
                            autocomplete="off"
                            value={footerTitle}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div className="fv-row mb-8 fv-plugins-icon-container">
                          <input
                            type="text"
                            placeholder="Subscribe Sub Title"
                            name="footerSubTitle"
                            autocomplete="off"
                            value={footerSubTitle}
                            className="form-control"
                            onChange={handleChange}
                          />

                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                      </div>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div class="fv-row mb-8 fv-plugins-icon-container">
                          <div class="mb-10">
                            {heroBanner ? (
                              <img className="w-100" src={heroBanner} />
                            ) : (
                              ""
                            )}
                            <label>Hero Banner (Desktop)</label>
                            <input
                              type="text"
                              placeholder="Hero Banner"
                              name="heroBanner"
                              autocomplete="off"
                              value={heroBanner}
                              className="form-control bg-transparent"
                              onChange={handleChange}
                            />
                            {/* <ReactTagInput
                              tags={FeaturedImage}
                              placeholder="Image Url Here"
                              onChange={handleImages}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div class="fv-row mb-8 fv-plugins-icon-container">
                          <div class="mb-10">
                            {heroBannerMobile ? (
                              <img className="w-100" src={heroBannerMobile} />
                            ) : (
                              ""
                            )}
                            <label>Hero Banner (Mobile)</label>
                            <input
                              type="text"
                              placeholder="Hero Banner"
                              name="heroBannerMobile"
                              autocomplete="off"
                              value={heroBannerMobile}
                              className="form-control bg-transparent"
                              onChange={handleChange}
                            />
                            {/* <ReactTagInput
                              tags={FeaturedImage}
                              placeholder="Image Url Here"
                              onChange={handleImages}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div class="fv-row mb-8 fv-plugins-icon-container">
                          <div class="mb-10">
                            {midPageBanner ? (
                              <img className="w-100" src={midPageBanner} />
                            ) : (
                              ""
                            )}
                            <label>Mid Page Banner</label>
                            <input
                              type="text"
                              placeholder="Mid Page Banner"
                              name="midPageBanner"
                              autocomplete="off"
                              value={midPageBanner}
                              className="form-control bg-transparent"
                              onChange={handleChange}
                            />
                            {/* <ReactTagInput
                              tags={FeaturedImage}
                              placeholder="Image Url Here"
                              onChange={handleImages}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-grid mb-10">
                          <button
                            type="submit"
                            id="kt_sign_in_submit"
                            className="btn btn-dark"
                          >
                            {/* <!--begin::Indicator label--> */}
                            <span className="indicator-label">Update</span>
                            {/* <!--end::Indicator label--> */}
                            {/* <!--begin::Indicator progress--> */}

                            {/* <!--end::Indicator progress--> */}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="text-center mb-11"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminContent user={user} />
    </>
  );
};

export default HomepageEditor;
