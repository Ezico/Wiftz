import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import BottomBanner from "../components/BottomBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestPodcasts from "../components/LatestPodcasts";
import ListenOn from "../components/ListenOn";
import Subscribe from "../components/Subscribe";
import TopPodcast from "../components/TopPodcast";
import { db } from "../firebase";

const Home = ({ featured, topList }) => {
  const [data, setData] = useState();
  const id = "TgcagxHqMIpvRTMnsjU4";
  useEffect(() => {
    id && getHomeDataFromDB();
  }, [id]);

  const getHomeDataFromDB = async () => {
    const docRef = doc(db, "HomeDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Hero data={data} />
      <ListenOn />
      <LatestPodcasts featured={featured} data={data} bg={"black"} />
      <BottomBanner data={data} />
      <TopPodcast topList={topList} data={data} />
      <Subscribe data={data} />
      <Footer data={data} />
    </>
  );
};

export default Home;
