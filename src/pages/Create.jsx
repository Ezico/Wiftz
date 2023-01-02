import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import "@pathofdev/react-tag-input/build/index.css";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "react-quill/dist/quill.snow.css";

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
  shortDescription: "",
  featured: "no",
  category: "",
  timestamp: "",
};

const Create = ({ user, handleLogout }) => {
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
    behindTheScene,
    FeatureImage,
    shortDescription,
    category,
    timestamp,
  } = form;
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBehindTheScene = (behindTheScene) => {
    setForm({ ...form, behindTheScene });
  };
  const handleSUbmit = async (e) => {
    e.preventDefault();

    const formatedDescrition = "<div>" + descriptionvalue + "</div>";
    const formatedResources = "<div>" + resourcesvalue + "</div>";
    var urlspc = title
      .replace(/[&\/\\ #,+()$~%.'":*?<>{}]/g, "-")
      .toLowerCase();
    var nospc = urlspc.replace(/[|&\/\\#,+()$~%.'":*?<>{}]/g, "").toLowerCase();
    var url = nospc.replaceAll(/--/g, "-");
    let newDoc = {
      description: formatedDescrition,
      resources: formatedResources,
      ...form,
    };
    // remove (-) from urls
    var lastData = url[url.length - 1];
    if (
      lastData == "-" ||
      lastData == "--" ||
      lastData == "---" ||
      lastData == "----"
    ) {
      var newUrl = url.slice(0, -1);
    } else {
      newUrl = url;
    }

    console.log(newUrl);
    if (title && featured && timestamp) {
      try {
        await addDoc(collection(db, "Podcasts"), {
          ...newDoc,
          url: newUrl,
          timestamp: timestamp,
          author: user.displayName,
          userId: user.uid,
          date: serverTimestamp(),
        });
        toast.success("Podcast Created Successfully");
      } catch (err) {
        toast.error("Not Added" + err);
      }
    }
    navigate("/admin/create-podcast");
  };
  const handleFeatured = (e) => {
    setForm({ ...form, featured: e.target.value });
  };

  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />

      <div
        className="wrapperx d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-5 order-2 order-lg-1">
            <div className="card card-custom">
              <div className="card-header">
                <div className="card-title">
                  <h1 className=" fw-bolder mb-3">Create Podcast</h1>
                </div>
                <div className="card-toolbar">
                  <Link to="/admin">
                    <button type="button" className="btn btn-sm btn-primary">
                      CANCEL
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card-scroll">
                <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                  <div className="" style={{ width: "95%" }}>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label className="text-gray-500" htmlFor="title">
                        Podcast Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        autocomplete="off"
                        value={title}
                        className="form-control bg-transparent"
                        onChange={handleChange}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label className="text-gray-500" htmlFor="title">
                        Short Description
                      </label>
                      <textarea
                        type="text"
                        name="shortDescription"
                        value={shortDescription}
                        autocomplete="off"
                        className="form-control bg-transparent"
                        onChange={handleChange}
                      ></textarea>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label className="text-gray-500" htmlFor="title">
                        Description
                      </label>
                      <ReactQuill
                        style={{ MinWidth: "200px" }}
                        theme="snow"
                        value={descriptionvalue}
                        onChange={setDescriptionValue}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label className="text-gray-500" htmlFor="title">
                        Resources
                      </label>
                      <ReactQuill
                        style={{ MinWidth: "200px" }}
                        theme="snow"
                        value={resourcesvalue}
                        onChange={setResourcesValue}
                      />
                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
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
                      </div>
                      <div className="col">
                        <div className="mb-10">
                          <label className="text-gray-500" htmlFor="apple">
                            Date
                          </label>
                          <input
                            type="text"
                            name="timestamp"
                            className="form-control form-control-solid"
                            value={timestamp}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <label className="text-gray-500" htmlFor="title">
                        Podcast Category
                      </label>
                      <input
                        style={{ width: "33%" }}
                        type="text"
                        name="category"
                        autocomplete="off"
                        value={category}
                        className="form-control bg-transparent"
                        onChange={handleChange}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
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

          <div className="d-flex flex-column flex-lg-row-fluid w-lg-25 p-5 order-2 order-lg-2">
            <div className="card card-custom">
              <div className="card-header">
                <h3 className="card-title">ADD NEW PODCAST</h3>
                <div className="card-toolbar">
                  <button type="button" className="btn btn-sm btn-primary">
                    <button
                      onClick={handleSUbmit}
                      id="kt_sign_in_submit"
                      className="btn btn-dark"
                    >
                      CREATE
                    </button>
                  </button>
                </div>
              </div>
              <div className="card-body card-scroll h-500px">
                <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                  <div className="w-100 p-10">
                    <div className="text-center mb-11">
                      <h1 className=" fw-bolder mb-3">Media Links</h1>

                      <div className="text-gray-500 fw-semibold fs-6">
                        insert you media links below
                      </div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label className="text-gray-500" htmlFor="apple">
                          Apple Podcasts
                        </label>
                        <input
                          type="text"
                          name="apple"
                          className="form-control form-control-solid"
                          value={apple}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label className="text-gray-500" htmlFor="sportify">
                          Spotify Podcasts
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          name="sportify"
                          value={sportify}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label className="text-gray-500" htmlFor="youtube">
                          Youtube Podcasts
                        </label>
                        <input
                          type="text"
                          name="youtube"
                          className="form-control form-control-solid"
                          value={youtube}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label className="text-gray-500" htmlFor="amazon">
                          Amazon Podcasts
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          value={amazon}
                          name="amazon"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label className="text-gray-500" htmlFor="google">
                          Google Podcasts
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          value={google}
                          name="google"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label className="text-gray-500" htmlFor="pod">
                          PodBean Podcasts
                        </label>
                        <input
                          type="text"
                          name="pod"
                          className="form-control form-control-solid"
                          value={pod}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <div className="mb-10">
                        <label>Featured Image Url</label>
                        {FeatureImage ? (
                          <img className="w-100" src={FeatureImage} />
                        ) : (
                          ""
                        )}
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

export default Create;
