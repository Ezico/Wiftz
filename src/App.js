import Home from "./pages/Home";
import Create from "./pages/Create";
import AdminHome from "./pages/AdminHome";
import BlogDetails from "./pages/BlogDetails";
import BlogListPage from "./pages/BlogListPage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import PodcastListpage from "./pages/PodcastListPage";
import PodcastPage from "./pages/PodcastPage";
import About from "./pages/About";
import PostPageEditor from "./pages/PostPageEditor";
import LegalPageEditor from "./pages/LegalPageEditor";
import HomepageEditor from "./pages/HomepageEditor";
import AboutPageEditor from "./pages/AboutPageEditor";
import PodcastDetails from "./pages/PodcastDetails";
import Auth from "./pages/Auth";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import "./media-query.css";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { signOut } from "firebase/auth";
import CreateBlog from "./pages/CreateBlog";
import {
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import Spinner from "./components/Spinner";
import EditBlog from "./pages/EditBlog";
import EditPodcast from "./pages/EditPodcast";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Cookies from "./pages/Cookies";
function App() {
  const [user, setUser] = useState(null);

  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // check signin
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        // console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      navigate("/register");
    });
  };

  // GET ALL POSTS FROM DB
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [featuredpost, setFeaturedPost] = useState([]);
  const [topList, setTopList] = useState([]);
  const [tags, setTags] = useState([]);

  // get all blog posts
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "Posts"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlog(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // get featured podcasts
  useEffect(() => {
    const collectionRef = collection(db, "Podcasts");
    const topQuerry = query(
      collectionRef,
      where("featured", "==", "yes"),
      limit(6)
    );

    const unsubxx = onSnapshot(
      topQuerry,
      (snapshot) => {
        let topList = [];
        snapshot.docs.forEach((doc) => {
          topList.push({ id: doc.id, ...doc.data() });
          setTopList(topList);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsubxx();
    };
  }, []);

  //
  useEffect(() => {
    const collectionRef = collection(db, "Podcasts");
    const featuredQuerry = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(
      featuredQuerry,
      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setPodcasts(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // get one Podcasts
  useEffect(() => {
    const collectionRef = collection(db, "Podcasts");
    const featuredQuerry = query(
      collectionRef,
      orderBy("timestamp", "desc"),
      limit(1)
    );

    const unsubx = onSnapshot(
      featuredQuerry,
      (snapshot) => {
        let featuredList = [];
        snapshot.docs.forEach((doc) => {
          featuredList.push({ id: doc.id, ...doc.data() });
        });
        setFeatured(featuredList);
        // console.log(featuredList);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsubx();
    };
  }, []);
  if (loading) {
    return <Spinner />;
  }

  const handleBlogDelete = async (id) => {
    if (window.confirm("are you sure you want to delete this post?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "Posts", id));
        toast.success("Blog Deleted Successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handlePodcastDelete = async (id) => {
    if (window.confirm("are you sure you want to delete this Podcast?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "Podcasts", id));
        toast.success("Podcast Deleted Successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="/"
          element={<Home topList={topList} featured={featured} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Podcast/:id" element={<PodcastDetails />} />
        <Route
          path="/podcasts"
          element={
            <PodcastPage topList={topList} featured={featured} tags={tags} />
          }
        />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />

        {/* admin */}
        <Route
          path="/admin"
          element={<AdminHome user={user} handleLogout={handleLogout} />}
        />

        <Route
          path="/register"
          element={<Auth handleLogout={handleLogout} user={user} />}
        />
        <Route
          path="/admin/create-blog"
          element={<CreateBlog handleLogout={handleLogout} user={user} />}
        />
        <Route
          path="/admin/blogs"
          element={
            <BlogListPage
              blogs={blog}
              handleLogout={handleLogout}
              user={user}
              handleBlogDelete={handleBlogDelete}
            />
          }
        />
        <Route
          path="/admin/create-podcast"
          element={<Create handleLogout={handleLogout} user={user} />}
        />
        <Route
          path="/admin/edit-blog/:id"
          element={<EditBlog handleLogout={handleLogout} user={user} />}
        />
        <Route
          path="/admin/edit-podcast/:id"
          element={<EditPodcast handleLogout={handleLogout} user={user} />}
        />
        <Route
          path="/admin/podcasts"
          element={
            <PodcastListpage
              podcasts={podcasts}
              handleLogout={handleLogout}
              user={user}
              handlePodcastDelete={handlePodcastDelete}
            />
          }
        />
        {/* editor pages */}
        <Route
          path="/admin/podcasts/editor"
          element={<PostPageEditor user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/admin/homepage/editor"
          element={<HomepageEditor user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/admin/about/editor"
          element={<AboutPageEditor user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/admin/legal/editor"
          element={<LegalPageEditor user={user} handleLogout={handleLogout} />}
        />
      </Routes>
    </div>
  );
}

export default App;
