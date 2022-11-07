// import React, { useEffect, useState } from "react";
// import "@pathofdev/react-tag-input/build/index.css";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { db, storage } from "../firebase";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// const initialState = {
//   title: "",
//   sportify: "",
//   youtube: "",
//   amazon: "",
//   google: "",
//   apple: "",
//   pod: "",
//   behindTheScene: "",
//   description: "",
//   shortDescription: "",
//   featured: "no",
//   resources: "",
// };

// const PodcastForm = ({ user }) => {
//   const [form, setForm] = useState(initialState);
//   const [file, setFile] = useState(null);
//   const [progress, setProgress] = useState(null);

//   const {
//     title,
//     youtube,
//     sportify,
//     amazon,
//     google,
//     apple,
//     pod,
//     featured,
//     // behindTheScene,
//     description,
//     shortDescription,
//     resources,
//   } = form;
//   useEffect(() => {
//     const uploadFile = () => {
//       const storageRef = ref(storage, file.name);
//       const uploadTask = uploadBytesResumable(storageRef, file);
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("upload is" + progress + "% done");
//           setProgress(progress);
//           switch (snapshot.state) {
//             case "pause":
//               console.log("upload is stoped");
//               break;
//             case "running":
//               console.log("upload is running");
//               break;
//             default:
//               break;
//           }
//         },
//         (error) => {
//           console.log(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
//             setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
//             console.log(form);
//           });
//         }
//       );
//     };
//     file && uploadFile();
//   }, [file]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     console.log(form);
//   };

//   const handleSUbmit = async (e) => {
//     e.preventDefault();

//     if (title && file && description && featured) {
//       try {
//         await addDoc(collection(db, "Podcasts"), {
//           ...form,
//           timestamp: serverTimestamp(),
//           author: user.displayName,
//           userId: user.uid,
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     // navigate("/admin");
//     console.log(form);
//   };
//   const handleFeatured = (e) => {
//     setForm({ ...form, featured: e.target.value });
//   };

//   return (
//     <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
//       <div className="d-flex flex-column flex-lg-row flex-column-fluid">
//         <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
//           <div className="d-flex flex-center flex-column flex-lg-row-fluid">
//             <div className="w-lg-500px p-10">
//               <div className="text-center mb-11">
//                 <h1 className=" text-light fw-bolder mb-3">Create Podcast</h1>

//                 <div className="text-gray-500 fw-semibold fs-6">
//                   Your Social Campaigns
//                 </div>
//               </div>

//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <input
//                   type="text"
//                   placeholder="Podcast Title"
//                   name="title"
//                   autocomplete="off"
//                   value={title}
//                   className="form-control bg-transparent"
//                   onChange={handleChange}
//                 />

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <textarea
//                   type="text"
//                   placeholder="Short Description"
//                   name="shortDescription"
//                   value={shortDescription}
//                   autocomplete="off"
//                   className="form-control bg-transparent"
//                   onChange={handleChange}
//                 ></textarea>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <textarea
//                   style={{ height: "200px" }}
//                   type="text"
//                   placeholder="Description"
//                   name="description"
//                   autocomplete="off"
//                   value={description}
//                   className="form-control bg-transparent"
//                   onChange={handleChange}
//                 ></textarea>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <textarea
//                   style={{ height: "50px" }}
//                   type="text"
//                   placeholder="Resources"
//                   name="resources"
//                   autocomplete="off"
//                   value={resources}
//                   className="form-control bg-transparent"
//                   onChange={handleChange}
//                 ></textarea>
//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="mb-10">
//                 <div className="row">
//                   <div className="col">Featured?</div>
//                   <div className="col">
//                     <input
//                       onChange={handleFeatured}
//                       className="form-check-input"
//                       type="radio"
//                       name="featured"
//                       value="yes"
//                       checked={featured === "yes"}
//                     />
//                     <label className="form-check-label" for="flexCheckChecked">
//                       Yes&nbsp;
//                     </label>
//                     <input
//                       onChange={handleFeatured}
//                       className="form-check-input"
//                       type="radio"
//                       name="featured"
//                       value="no"
//                       checked={featured === "no"}
//                     />
//                     <label className="form-check-label" for="flexCheckChecked">
//                       No
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* side two */}

//         <div className="d-flex flex-column flex-lg-row-fluid w-lg-25 p-10 order-2 order-lg-2">
//           <div className="d-flex flex-center flex-column flex-lg-row-fluid">
//             <div className="w-100 p-10">
//               <div className="text-center mb-11">
//                 <h1 className="text-light fw-bolder mb-3"> Media Links</h1>

//                 <div className="text-gray-500 fw-semibold fs-6">
//                   insert you media links below
//                 </div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <div className="mb-10">
//                   <input
//                     type="text"
//                     name="apple"
//                     className="form-control form-control-solid"
//                     placeholder="Apple Podcast"
//                     value={apple}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <div className="mb-10">
//                   <input
//                     type="text"
//                     className="form-control form-control-solid"
//                     placeholder="Sportify Podcast"
//                     name="sportify"
//                     value={sportify}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <div className="mb-10">
//                   <input
//                     type="text"
//                     name="youtube"
//                     className="form-control form-control-solid"
//                     placeholder="Youtube podcast"
//                     value={youtube}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <div className="mb-10">
//                   <input
//                     type="text"
//                     className="form-control form-control-solid"
//                     placeholder="Amazon Podcast"
//                     value={amazon}
//                     name="amazon"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <div className="mb-10">
//                   <input
//                     type="text"
//                     className="form-control form-control-solid"
//                     placeholder="Google Podcast"
//                     value={google}
//                     name="google"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <div className="mb-10">
//                   <input
//                     type="text"
//                     name="pod"
//                     className="form-control form-control-solid"
//                     placeholder="PodBean Podcast"
//                     value={pod}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="fv-plugins-message-container invalid-feedback"></div>
//               </div>
//               <div className="fv-row mb-8 fv-plugins-icon-container">
//                 <div className="mb-10">
//                   <input
//                     type="file"
//                     className="form-control"
//                     onChange={(e) => setFile(e.target.files[0])}
//                     name=""
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="d-grid mb-10">
//                 <button
//                   onClick={handleSUbmit}
//                   id="kt_sign_in_submit"
//                   className="btn btn-primary"
//                   disabled={progress !== null && progress < 100}
//                 >
//                   {/* <!--begin::Indicator label--> */}
//                   <span className="indicator-label">Create</span>
//                   {/* <!--end::Indicator label--> */}
//                   {/* <!--begin::Indicator progress--> */}
//                   <span className="indicator-progress">
//                     Please wait...
//                     <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
//                   </span>
//                   {/* <!--end::Indicator progress--> */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PodcastForm;
