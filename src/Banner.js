import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import {
  ChevronLeft as PrevArrowIcon,
  ChevronRight as NextArrowIcon,
} from "@material-ui/icons";

function NextArrow(props) {
  const { onClick } = props;
  return <NextArrowIcon onClick={onClick} className="banner__nextArrow" />;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <PrevArrowIcon onClick={onClick} className="banner__prevArrow" />;
}

// configuration for slide
let settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidestoShow: 1,
  initialSlide: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Banner = ({ data }) => {
  return (
    <div className="banner">
      <Slider {...settings} className="productList__row">
        {data.map((item, index) => (
          <img key={index} src={item.url} className="banner__image" alt={""} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
