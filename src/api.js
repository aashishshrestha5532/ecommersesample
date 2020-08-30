/*mock api to manipulate the data */

import data,{banner_data,nav_data} from "./data";
const timeInterval = 2500 // for response
export const getBannerData = () => {
  // all the image credit goes to gyapu.com  
  return new Promise((resolve,reject) => setTimeout(resolve(banner_data),timeInterval))
};

export const getNavData = () => {
  return new Promise((resolve,reject) => setTimeout(resolve(nav_data),timeInterval))
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
  let new_data = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      image: item.image,
      slug: item.slug,
    };
  });

  return new Promise((resolve,reject) => setTimeout(resolve(new_data),timeInterval))
};

export const getSimilarProducts = () => {
  let new_data = data.slice(0, 5).map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      image: item.image,
      slug: item.slug,
    };
  });
  return new Promise((resolve,reject) => setTimeout(resolve(new_data),timeInterval))
};

export const getProductsBySameSeller = () => {
  let new_data = data.slice(0, 5).map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      image: item.image,
      slug: item.slug,
    };
  });
  return new Promise((resolve,reject) => setTimeout(resolve(new_data),timeInterval))
};

export const getProductDetail = (slug) => {
  let new_data = data.find((item) => item.slug === slug);
  return new Promise((resolve,reject) => setTimeout(resolve(new_data),timeInterval))
};

export const getProductsByPriceRange = (min, max) => {
  return data.filter((item) => item.price >= min && item.price <= max);
};
