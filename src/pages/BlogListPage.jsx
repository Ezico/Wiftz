import React from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import { Link } from "react-router-dom";

const BlogListPage = ({ user, handleLogout, blogs, handleBlogDelete }) => {
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
              <div className="p-10 w-100">
                <table className="m-10 table table-hover table-rounded table-striped border gy-7 gs-7">
                  <thead>
                    <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                      <th>Thumbnail</th>
                      <th>Title</th>
                      <th>Date</th>
                      <th>View</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((item) => (
                      <tr key={item.index}>
                        <td>
                          {item.FeaturedImage ? (
                            <img
                              className="thumbnail-small"
                              src={item.FeaturedImage}
                              alt={item.title}
                            />
                          ) : (
                            <img
                              className="thumbnail-small"
                              src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                            />
                          )}
                        </td>
                        <td className="list-style">
                          <div className="text-start">
                            <h6 className="title">{item.title}</h6>
                          </div>
                        </td>
                        <td>{item.timestamp.toDate().toDateString()}</td>
                        <td>
                          <Link to={`/blog/${item.id}`}>View</Link>
                        </td>
                        <td>
                          <div style={{ float: "right" }}>
                            <svg
                              style={{ margin: "15px", cursor: "pointer" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                              onClick={() => handleBlogDelete(item.id)}
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>
                            <Link to={`/admin/edit-blog/${item.id}`}>
                              <svg
                                style={{ cursor: "pointer" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-pencil-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                              </svg>
                            </Link>
                          </div>
                        </td>
                        {/* {excerpt(item.description, 120)} */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminContent user={user} />
    </>
  );
};

export default BlogListPage;
