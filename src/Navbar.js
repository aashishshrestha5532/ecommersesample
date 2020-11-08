import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ChevronRight as ArrowRightIcon } from "@material-ui/icons";
import { getNavData } from "./api";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  const [data, setData] = useState([]);

  const handleScrollListener = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  };

  useEffect(() => {
    handleScrollListener();
    getNavData().then((response) => {
      setData(response);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`navbar ${show && "navbar-hide"}`}>
      <ul class="navbar__menu">
        {/* Main Category  */}
        {data?.map((category, index) => (
          <li key={index}>
            <Link className="navbar__link" to={`/category/${category.slug}`}>
              {category.name}
            </Link>
            {category.children.length > 0 && (
              <ul>
                {/* Sub Category */}
                {category.children.map((subCategory, subIndex) => (
                  <li key={subIndex}>
                    <Link to={`/category/${subCategory.slug}`}>
                      {subCategory.name}
                    </Link>

                    {subCategory.children.length > 0 && (
                      // Only if the children exists
                      <ArrowRightIcon
                        className="navbar__arrow"
                        style={{ position: "absolute", top: 3, right: 5 }}
                      />
                    )}
                    {subCategory.children.length > 0 && (
                      <ul>
                        {/* Last Category */}
                        {subCategory.children.map((lastCategory, lastIndex) => (
                          <li key={lastIndex}>
                            <Link to={`/category/${lastCategory.slug}`}>
                              {lastCategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
    // Following code for static nav content
    /* <nav><li>
          <Link className="navbar__link" to="#">
            G-Bar
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="#">
            Bajeko Sekuwa
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="#">
            Civil Mall
          </Link>
          <ul>
            <li>
              <Link to="/category/women-fashion">Womens Fashion</Link>
            </li>
            <li>
              <Link to="#">
                Mens Fashion
                <ArrowRightIcon
                  className="navbar__arrow"
                  style={{ position: "absolute", top: 3, right: 5 }}
                />
              </Link>

              <ul>
                <li>
                  <Link to="/category/t-shirts">T-shirts</Link>
                </li>
                <li>
                  <Link to="#">Shirts</Link>
                </li>
                <li>
                  <Link to="#">Chinos</Link>
                </li>
                <li>
                  <Link to="#">Pants</Link>
                </li>
                <li>
                  <Link to="#">Long Sleeve Shirts</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Watch and accessories</Link>
            </li>
            <li>
              <Link to="#">Beauty and Collections</Link>
            </li>
            <li>
              <Link to="#">Electronics and Gadgets</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="navbar__link">Drinks</Link>
        </li>
        <li>
          <Link className="navbar__link">Electronics and Gadgets</Link>
        </li>
        <li>
          <Link className="navbar__link">Fashion</Link>
        </li>
        <li>
          <Link className="navbar__link">Covid safety gears</Link>
        </li>
        <li>
          <Link className="navbar__link">Tv & Home appliances</Link>
        </li>
        <li>
          <Link className="navbar__link">Home & LifeStyles</Link>
        </li>
        <li>
          <Link className="navbar__link">More</Link>
        </li></nav> */
  );
}
