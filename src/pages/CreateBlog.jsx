import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const initialState = {
  title: "",
  tags: [],
  FeaturedImage: "",
  trending: "no",
  category: "",
  shortDescription: "",
};

const categoryOptions = ["Self growth", "Health care", "Health", "Climate"];

const CreateBlog = ({ user, handleLogout }) => {
  const [form, setForm] = useState(initialState);
  const [progress, setProgress] = useState(null);
  const [descriptionvalue, setDescriptionValue] = useState();

  const { title, tags, trending, category, FeaturedImage, shortDescription } =
    form;

  const navigate = useNavigate();
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  const handleImages = (FeaturedImage) => {
    setForm({ ...form, FeaturedImage });
  };

  const handleTrending = (e) => {
    setForm({ ...form, trending: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatedDescrition = "<div>" + descriptionvalue + "</div>";
    let newDoc = {
      ...form,
      description: formatedDescrition,
    };
    console.log(newDoc);
    if (category && tags && title && FeaturedImage && trending) {
      try {
        await addDoc(collection(db, "Posts"), {
          ...newDoc,
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
        });
        toast.success("Post Created Successfully");
      } catch (err) {
        console.log(err);
      }
    }
    navigate("/admin");
  };
  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />

      <div
        className="wrapperx d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 pt-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-lg-75 pt-5">
                <div className="card card-custom">
                  <div className="card-header">
                    <div className="card-title">
                      <h1 className=" fw-bolder mb-3">Create a Post</h1>
                    </div>
                    <div className="card-toolbar">
                      <Link to="/admin">
                        <button type="button" className="btn btn-sm btn-dark">
                          CANCEL
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body card-scroll ">
                    <form className="" onSubmit={handleSubmit}>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <label className="text-gray-500" htmlFor="title">
                          Post Title
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
                          Tags
                        </label>
                        <ReactTagInput tags={tags} onChange={handleTags} />
                        <div className="fv-plugins-message-container invalid-feedback"></div>
                      </div>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <label className="text-gray-500" htmlFor="title">
                          Short Description
                        </label>
                        <textarea
                          style={{ height: "100px" }}
                          type="text"
                          name="shortDescription"
                          autocomplete="off"
                          value={shortDescription}
                          className="form-control bg-transparent"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <label className="text-gray-500" htmlFor="title">
                          Description
                        </label>
                        <ReactQuill
                          theme="snow"
                          value={descriptionvalue}
                          onChange={setDescriptionValue}
                        />

                        <div className="fv-plugins-message-container invalid-feedback"></div>
                      </div>

                      <div className="mb-10">
                        <div className="row">
                          <p className="col text-dark">Is it featured?</p>
                          <div className="col form-check-inline mx-2">
                            <input
                              type="radio"
                              className="form-check-input"
                              value="yes"
                              name="radioOption"
                              checked={trending === "yes"}
                              onChange={handleTrending}
                            />
                            <label
                              htmlFor="radioOption"
                              className="form-check-label"
                            >
                              Yes&nbsp;
                            </label>

                            <input
                              type="radio"
                              className="form-check-input"
                              value="no"
                              name="radioOption"
                              checked={trending === "no"}
                              onChange={handleTrending}
                            />
                            <label
                              htmlFor="radioOption"
                              className="form-check-label"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <label className="text-gray-500" htmlFor="title">
                          Category
                        </label>
                        <select
                          value={category}
                          onChange={onCategoryChange}
                          className="form-select form-select-white"
                        >
                          <option>Please select a category</option>
                          {categoryOptions.map((option, index) => (
                            <option value={option || ""} key={index}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="fv-plugins-message-container invalid-feedback"></div>
                      </div>

                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div class="fv-row mb-8 fv-plugins-icon-container">
                          <div class="mb-10">
                            {/* <input
                              type="text"
                              placeholder=" Image Link"
                              name="FeaturedImage"
                              autocomplete="off"
                              value={FeaturedImage}
                              className="form-control bg-transparent"
                              onChange={handleChange}
                            /> */}

                            <div className="fv-row mb-8 fv-plugins-icon-container">
                              <div className="mb-10">
                                {FeaturedImage ? (
                                  <img className="w-100" src={FeaturedImage} />
                                ) : (
                                  ""
                                )}
                                <label
                                  className="text-gray-500"
                                  htmlFor="title"
                                >
                                  Featured Image
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={handleChange}
                                  name="FeaturedImage"
                                  value={FeaturedImage}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-grid mb-10">
                          <button
                            type="submit"
                            id="kt_sign_in_submit"
                            className="btn btn-dark"
                            disabled={progress !== null && progress < 100}
                          >
                            {/* <!--begin::Indicator label--> */}
                            <span className="indicator-label">Create</span>
                            {/* <!--end::Indicator label--> */}
                            {/* <!--begin::Indicator progress--> */}
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                            {/* <!--end::Indicator progress--> */}
                          </button>
                        </div>
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

export default CreateBlog;
