import ReactTagInput from "@pathofdev/react-tag-input";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import { db } from "../firebase";
const initialState = {
  title: "",
  list: [],
  FeaturedImage: "",
  Category: "",
  timestamp: "",
};

const input = {};
const EditResource = ({ user, handleLogout }) => {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [linkList, setLinkList] = useState(input);
  const [descriptionvalue, setDescriptionValue] = useState();
  const [listx, setListx] = useState();
  const { title, Category, list, FeaturedImage, timestamp } = form;
  const { Text, Link } = linkList;
  // get existng data
  useEffect(() => {
    id && getResourceDetail();
    // getData();
  }, [id]);

  const getResourceDetail = async () => {
    const docRef = doc(db, "Resources", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setDescriptionValue(snapshot.data().description);
      setForm({ ...snapshot.data() });
    }
  };

  // get all tags from db
  // populate tags with data from db
  // const getData = async (e) => {
  //   let tagList = [];
  //   const Item = query(
  //     collection(db, "ResourcesItems"),
  //     orderBy("date", "desc")
  //   );
  //   const querySnapshot = await getDocs(Item);
  //   querySnapshot.forEach((doc) => {
  //     list.push({ ...doc.data() });
  //   });
  // };

  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddData = (e) => {
    setLinkList({ ...linkList, [e.target.name]: e.target.value });
  };
  // tags
  const handleList = (list) => {
    setForm({ ...form, list });
  };
  const handleSubmitData = async (e) => {
    var urlspc = title
      .replace(/[&\/\\ #,+()$~%.'":*?<>{}]/g, "-")
      .toLowerCase();
    var nospc = urlspc.replace(/[|&\/\\#,+()$~%.'":*?<>{}]/g, "").toLowerCase();
    var url = nospc.replaceAll(/--/g, "-");

    var formated = Text.charAt(0).toLocaleUpperCase();
    e.preventDefault();
    // console.log(nospc);
    try {
      await addDoc(collection(db, "ResourcesItems"), {
        data: linkList,
        id: url,
        class: formated,
        date: serverTimestamp(),
      });
      toast.success("Added!");
    } catch (err) {
      console.log(err);
    }
    // window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatedDescrition = "<div>" + descriptionvalue + "</div>";
    let newDoc = {
      ...form,
      description: formatedDescrition,
    };
    console.log(newDoc);
    if (Category && list && title) {
      try {
        await updateDoc(doc(db, "Resources", id), {
          ...newDoc,
          timestamp: timestamp,
          author: user.displayName,
          userId: user.uid,
          date: serverTimestamp(),
        });
        toast.success("Resource Updated Successfully");
      } catch (err) {
        console.log(err);
      }
    } else {
      return toast.error("all fields are required");
    }
    // navigate("/admin/blogs");
  };
  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />
      <div class="wrapperx d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="d-flex flex-column flex-lg-row flex-column-fluid">
          <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-5 order-2 order-lg-1">
            <div class="card card-custom">
              <div class="card-header">
                <div class="card-title">
                  <h1 class="fw-bolder mb-3">Edit Resource</h1>
                </div>
                <div class="card-toolbar">
                  <a href="/admin">
                    <button type="button" class="btn btn-sm btn-primary">
                      CANCEL
                    </button>
                  </a>
                </div>
              </div>
              <div class="card-scroll">
                <div class="d-flex flex-center flex-column flex-lg-row-fluid">
                  <div class="" style={{ width: "95%" }}>
                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <label class="text-gray-500" for="title">
                        Resource Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        autocomplete="off"
                        class="form-control bg-transparent"
                        value={title}
                        onChange={handleChange}
                      />
                      <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <label class="text-gray-500" for="title">
                        Description
                      </label>
                      <ReactQuill
                        type="text"
                        name="descriptionvalue"
                        autocomplete="off"
                        onChange={setDescriptionValue}
                        value={descriptionvalue}
                        class="form-control bg-transparent"
                      />
                      <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>

                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <label class="text-gray-500" for="title">
                        Resource Category
                      </label>
                      <input
                        type="text"
                        name="Category"
                        autocomplete="off"
                        class="form-control bg-transparent"
                        value={Category}
                        onChange={handleChange}
                      />
                      <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>

                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        <label>Image</label>
                        {FeaturedImage ? (
                          <img className="w-100" src={FeaturedImage} />
                        ) : (
                          ""
                        )}
                        <div class="row"></div>
                        <div class="react-tag-input">
                          <input
                            class="react-tag-input__input"
                            placeholder="Paste image urls here"
                            name="FeaturedImage"
                            value={FeaturedImage}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-lg-row-fluid w-lg-25 p-5 order-2 order-lg-2">
            <div class="card card-custom">
              <div class="card-header">
                <h3 class="card-title">ADD NEW PODCAST</h3>
                <div class="card-toolbar">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    onClick={handleSubmit}
                  >
                    UPDATE
                  </button>
                </div>
              </div>
              <div class="card-body card-scroll h-500px">
                <div class="d-flex flex-center flex-column flex-lg-row-fluid">
                  <div class="w-100 p-10">
                    <div class="text-center mb-11">
                      <h1 class="fw-bolder mb-3">Text & Links</h1>
                    </div>
                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        <label class="text-gray-500" for="apple">
                          Text
                        </label>
                        <input
                          type="text"
                          name="Text"
                          class="form-control form-control-solid"
                          value={Text}
                          onChange={handleAddData}
                        />
                      </div>
                      <div class="mb-10">
                        <label class="text-gray-500" for="apple">
                          Link
                        </label>
                        <input
                          type="text"
                          name="Link"
                          class="form-control form-control-solid"
                          value={Link}
                          onChange={handleAddData}
                        />
                      </div>
                      <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div class="fv-row mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        <button
                          style={{ width: "100%" }}
                          type="button"
                          class="btn btn-sm btn-primary"
                          onClick={handleSubmitData}
                        >
                          ADD
                        </button>
                      </div>
                      <div class="fv-plugins-message-container invalid-feedback"></div>
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

export default EditResource;
