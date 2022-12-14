import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import "@pathofdev/react-tag-input/build/index.css";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import { Link } from "react-router-dom";

const initialState = {
  title: "",
  sportify: "",
  youtube: "",
  amazon: "",
  google: "",
  apple: "",
  pod: "",
  FeatureImage: "",
  behindTheScene: [],
  featured: "",
  resources: "",
  category: "",
  timestamp: "",
};

const EditPodcast = ({ user, handleLogout }) => {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [descriptionvalue, setDescriptionValue] = useState();
  const [resourcesvalue, setResourcesValue] = useState();

  const {
    title,
    youtube,
    sportify,
    amazon,
    google,
    apple,
    pod,
    featured,
    FeatureImage,
    behindTheScene,
    description,
    shortDescription,
    category,
    timestamp,
  } = form;

  useEffect(() => {
    id && getPodcastDetails();
  }, [id]);

  const getPodcastDetails = async () => {
    const docRef = doc(db, "Podcasts", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
      setDescriptionValue(snapshot.data().description);
      setResourcesValue(snapshot.data().resources);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleFeatured = (e) => {
    setForm({ ...form, featured: e.target.value });
  };
  const handleBehindTheScene = (behindTheScene) => {
    setForm({ ...form, behindTheScene });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatedDescrition = "<div>" + descriptionvalue + "</div>";
    const formatedResources = "<div>" + resourcesvalue + "</div>";

    var urlspc = title
      .replace(/[&\/\\ #,+()$~%.'":*?<>{}]/g, "-")
      .toLowerCase();
    var nospc = urlspc.replace(/[|&\/\\#,+()$~%.'":*?<>{}]/g, "").toLowerCase();
    var url = nospc.replaceAll(/--/g, "-");
    let newDoc = {
      ...form,
      url: url,
      description: formatedDescrition,
    };
    console.log(newDoc);
    if (title && description) {
      try {
        await updateDoc(doc(db, "Podcasts", id), {
          ...newDoc,
          author: user.displayName,
          userId: user.uid,
          timestamp: timestamp,
          date: serverTimestamp(),
        });
        toast.success("Podcast Updated Successfully");
      } catch (err) {
        console.log(err);
      }
    } else {
      return toast.error("all fields are required");
    }
    navigate("/admin");
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
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-1 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="card card-custom">
                <div className="card-header">
                  <div className="card-title">
                    <h1 className=" fw-bolder mb-3">Edit Podcast</h1>
                  </div>
                  <div className="card-toolbar">
                    <Link to="/admin">
                      <button type="button" className="btn btn-sm btn-primary">
                        CANCEL
                      </button>
                    </Link>
                  </div>

                  <div className="card-body card-scroll ">
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label className="text-gray-500" htmlFor="title">
                        Podcast Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        autocomplete="off"
                        value={title}
                        className="form-control "
                        onChange={handleChange}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label
                        className="text-gray-500"
                        htmlFor="shortDescription"
                      >
                        Short Description
                      </label>
                      <textarea
                        type="text"
                        name="shortDescription"
                        value={shortDescription}
                        autocomplete="off"
                        className="form-control "
                        onChange={handleChange}
                      ></textarea>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label
                        className="text-gray-500"
                        htmlFor="shortDescription"
                      >
                        Description
                      </label>
                      <ReactQuill
                        theme="snow"
                        value={descriptionvalue}
                        onChange={setDescriptionValue}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label className="text-gray-500" htmlFor="resources">
                        Resources
                      </label>
                      <ReactQuill
                        theme="snow"
                        value={resourcesvalue}
                        onChange={setResourcesValue}
                      />
                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="row">
                        <div className="col">
                          <label className="text-gray-500" htmlFor="category">
                            Category
                          </label>
                          <input
                            style={{ width: "60%" }}
                            type="text"
                            name="category"
                            autocomplete="off"
                            value={category}
                            className="form-control bg-transparent"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col">
                          <label className="text-gray-500" htmlFor="category">
                            Date
                          </label>
                          <input
                            style={{ width: "60%" }}
                            type="text"
                            name="timestamp"
                            autocomplete="off"
                            value={timestamp}
                            className="form-control bg-transparent"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="mb-10">
                      <div className="row">
                        <div className="col">Featured?</div>
                        <div className="col">
                          <input
                            onChange={handleFeatured}
                            className="form-check-input"
                            type="radio"
                            name="featured"
                            value="yes"
                            checked={featured === "yes"}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Yes&nbsp;
                          </label>
                          <input
                            onChange={handleFeatured}
                            className="form-check-input"
                            type="radio"
                            name="featured"
                            value="no"
                            checked={featured === "no"}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        <label>Behind the scene images</label>
                        {behindTheScene ? (
                          <div className="row">
                            {behindTheScene.map((item, index) => (
                              <div className="col-3">
                                <img src={item} alt="" className="w-100" />
                              </div>
                            ))}
                          </div>
                        ) : (
                          ""
                        )}
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          Behind the scene image urls
                        </label>
                        <ReactTagInput
                          tags={behindTheScene}
                          placeholder="Paste image urls here"
                          onChange={handleBehindTheScene}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* side two */}

          <div className="d-flex flex-column flex-lg-row-fluid w-lg-25 p-10 order-2 order-lg-2">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-100 ">
                <div className="card card-custom">
                  <div className="card-header">
                    <h3 className="card-title">MEDIA LINKS</h3>
                    <div className="card-toolbar">
                      <button
                        onClick={handleSubmit}
                        id="kt_sign_in_submit"
                        className="btn btn-primary"
                      >
                        {/* <!--begin::Indicator label--> */}
                        <span className="indicator-label">Update</span>

                        {/* <!--end::Indicator progress--> */}
                      </button>
                    </div>
                  </div>
                  <div className="card-body card-scroll ">
                    <div className="text-gray-500 fw-semibold fs-6">
                      <center>insert you media links below</center>
                    </div>
                    <br />
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          Apple
                        </label>
                        <input
                          type="text"
                          name="apple"
                          className="form-control form-control-solid"
                          placeholder="Apple Podcast"
                          value={apple}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          Spotify
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder="Sportify Podcast"
                          name="sportify"
                          value={sportify}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          Youtube
                        </label>
                        <input
                          type="text"
                          name="youtube"
                          className="form-control form-control-solid"
                          placeholder="Youtube podcast"
                          value={youtube}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          Amazon
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder="Amazon Podcast"
                          value={amazon}
                          name="amazon"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          Google
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder="Google Podcast"
                          value={google}
                          name="google"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          PodBean
                        </label>
                        <input
                          type="text"
                          name="pod"
                          className="form-control form-control-solid"
                          placeholder="PodBean Podcast"
                          value={pod}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        {FeatureImage ? (
                          <img className="w-100" src={FeatureImage} />
                        ) : (
                          ""
                        )}
                        <label
                          className="text-gray-500"
                          htmlFor="shortDescription"
                        >
                          Featured Image Url
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                          name="FeatureImage"
                          value={FeatureImage}
                        />
                      </div>
                    </div>
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

export default EditPodcast;
