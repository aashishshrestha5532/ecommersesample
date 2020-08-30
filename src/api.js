/*mock api to manipulate the data */

import data,{banner_data,nav_data} from "./data";

export const getBannerData = () => {
  // all the image credit goes to gyapu.com  
  return banner_data
};

export const getNavData = () => {
    return nav_data
}

export const getAllProducts = () => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      image: item.image,
      slug: item.slug,
    };
  });
};

export const getTrendingProducts = () => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      image: item.image,
      slug: item.slug,
    };
  });
};

export const getSimilarProducts = () => {
  return data.slice(0, 5).map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      image: item.image,
      slug: item.slug,
    };
  });
};

export const getProductsBySameSeller = () => {
  return data.slice(0, 5).map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      image: item.image,
      slug: item.slug,
    };
  });
};

export const getProductDetail = (slug) => {
  return data.find((item) => item.slug === slug);
};

export const getProductsByPriceRange = (min, max) => {
  return data.filter((item) => item.price >= min && item.price <= max);
};
