import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import ProductList from "../ProductList";
import { getTrendingProducts, getBannerData } from "../api";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [banner, setBanner] = useState([]);
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    let i = 0;
      getTrendingProducts().then((response) => {
        setTrending(response);
        i++;
        if(i === 2) {
          setIsRendered(true);
        }
      });
      getBannerData().then((response) => {
        setBanner(response);
        i++;
        if(i === 2) {
          setIsRendered(true);
        }
      });
  }, []);
  if (!isRendered) {
    return <h3 style={{ textAlign: "center", minHeight: 250 }}>Loading...</h3>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: 25,
      }}
    >
      {/* Banner */}
      <Banner data={banner} />
      <ProductList title="Trending 🥂🍷🍺" data={trending} />
      <ProductList title="Civil Mall" data={trending} />

      <ProductList title="Covid Safety gears" data={trending} />
    </div>
  );
};

export default Home;
