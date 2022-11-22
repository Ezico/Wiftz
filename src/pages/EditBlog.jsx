import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const initialState = {
  title: "",
  tags: [],
  trending: "no",
  category: "",
  FeaturedImage: "",
  shortDescription: "",
  date: "",
};

const categoryOptions = ["Self growth", "Health care", "Health", "Climate"];

const EditBlog = ({ user, handleLogout }) => {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [descriptionvalue, setDescriptionValue] = useState();

  const {
    title,
    tags,
    trending,
    category,
    FeaturedImage,
    shortDescription,
    timestamp,
  } = form;

  //update data
  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "Posts", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setDescriptionValue(snapshot.data().description);
      setForm({ ...snapshot.data() });
    }
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTags = (tags) => {
    setForm({ ...form, tags });
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
    if (category && tags && title && trending && timestamp) {
      try {
        await updateDoc(doc(db, "Posts", id), {
          ...newDoc,
          timestamp: timestamp,
          author: user.displayName,
          userId: user.uid,
          date: serverTimestamp(),
        });
        toast.success("Post Updated Successfully");
      } catch (err) {
        console.log(err);
      }
    } else {
      return toast.error("all fields are required");
    }
    navigate("/admin/blogs");
  };
  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />

      <div
        className="wrapperx d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-75 p-10">
                <div className="card card-custom">
                  <div className="card-header">
                    <div className="card-title">
                      <h1 className=" fw-bolder mb-3">Update Post</h1>
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
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          autoComplete="off"
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
                          autoComplete="off"
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
                          <p className="col text-white">Is it featured?</p>
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

                      <div className="row">
                        <div className="col-6">
                          <div className="fv-row mb-8 fv-plugins-icon-container">
                            <label className="text-gray-500" htmlFor="title">
                              Category
                            </label>
                            <input
                              style={{ width: "33%" }}
                              type="text"
                              name="category"
                              autoComplete="off"
                              value={category}
                              className="form-control bg-transparent"
                              onChange={handleChange}
                            />
                            <div className="fv-plugins-message-container invalid-feedback"></div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="fv-row mb-8 fv-plugins-icon-container">
                            <label className="text-gray-500" htmlFor="title">
                              Date
                            </label>
                            <input
                              style={{ width: "66%" }}
                              type="text"
                              name="timestamp"
                              autoComplete="off"
                              value={timestamp}
                              className="form-control bg-transparent"
                              onChange={handleChange}
                            />
                            <div className="fv-plugins-message-container invalid-feedback"></div>
                          </div>
                        </div>
                      </div>

                      <div className="fv-row mb-8 fv-plugins-icon-container">
                        <div class="fv-row mb-8 fv-plugins-icon-container">
                          <div class="mb-10">
                            {FeaturedImage ? (
                              <img className="w-100" src={FeaturedImage} />
                            ) : (
                              ""
                            )}
                            <label className="text-gray-500" htmlFor="title">
                              Featured Image Url
                            </label>
                            <input
                              type="text"
                              placeholder="Featured Image"
                              name="FeaturedImage"
                              autoComplete="off"
                              value={FeaturedImage}
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

                      <div className="d-grid mb-10">
                        <button
                          type="submit"
                          id="kt_sign_in_submit"
                          className="btn btn-primary"
                        >
                          Update
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

export default EditBlog;
