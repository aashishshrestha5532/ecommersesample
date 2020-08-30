import React, { useEffect, useState } from 'react';
import Banner from "../Banner";
import ProductList from '../ProductList'
import { getTrendingProducts, getBannerData } from '../api';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [trending,setTrending] = useState([])
  const [banner,setBanner] = useState([])
  useEffect(() => {
    setTrending(getTrendingProducts())
    setBanner(getBannerData())
  },[])

    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginBottom:25}}>
        {/* Banner */}
        <Banner
           data={banner}
        />
        <ProductList title="Trending 🥂🍷🍺" data={trending}/>
        <ProductList title="Civil Mall" data={trending}/>

        <ProductList title="Covid Safety gears" data={trending}/>

      </div>
    );
}

export default Home;
