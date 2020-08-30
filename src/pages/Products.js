import React from "react";
import "./Products.scss";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import GridOnIcon from "@material-ui/icons/GridOnSharp";
import GridOffIcon from "@material-ui/icons/List"; //list view
import ProductL from "../ProductListItem";
import ProductG from "../Product"; // grid view
import Breadcrumb from "../Breadcrumb";
import { getAllProducts, getProductsByPriceRange } from "../api";
import { useStateValue } from "../StateProvider";

class DynamicBounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 200,
      max: 800,
    };
  }

  onSliderChange = (value) => {
    this.props.onPriceChange(value[0], value[1]);
  };

  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || 0,
    });
  };

  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || 100,
    });
  };

  render() {
    return (
      <>
        <Range
          defaultValue={[200, 800]}
          min={this.state.min}
          max={this.state.max}
          tabIndex={[20, 500]}
          trackStyle={[{ backgroundColor: "#d68215" }]}
          handleStyle={[
            {
              backgroundColor: "white",
              borderColor: "#d68215",
              borderWidth: 2,
            },
            {
              backgroundColor: "white",
              borderColor: "#d68215",
              borderWidth: 2,
            },
          ]}
          onChange={this.onSliderChange}
        />
        <div className="products__left__range">
          <input
            type="number"
            value={this.state.min}
            onChange={this.onMinChange}
          />
          <label>To</label>
          <input
            type="number"
            value={this.state.max}
            onChange={this.onMaxChange}
          />
          <br />
        </div>
      </>
    );
  }
}

const Products = ({ match }) => {
  const [{ gridMode }, dispatch] = useStateValue();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(getAllProducts());
    // fetch all the datas using the slug
  }, [match]);

  const setListMode = () => {
    dispatch({
      type: "SET_LIST_MODE",
    });
  };

  const setGridMode = () => {
    dispatch({
      type: "SET_GRID_MODE",
    });
  };

  const handleProductSort = (e) => {
    let type = e.target.value;
    switch (type) {
      case "price_asc":
        setData(
          Object.assign(
            [],
            data.sort((a, b) => a.price - b.price)
          )
        );
        break;
      case "price_desc":
        setData(
          Object.assign(
            [],
            data.sort((a, b) => b.price - a.price)
          )
        );
        break;
      case "rating_asc":
        setData(
          Object.assign(
            [],
            data.sort((a, b) => a.rating - b.rating)
          )
        );
        break;
      case "rating_desc":
        setData(
          Object.assign(
            [],
            data.sort((a, b) => b.rating - a.rating)
          )
        );
        break;

      default:
        return;
    }
  };

  const onPriceChange = (min, max) => {
    // filtering the products when the price is changed
    setData(getProductsByPriceRange(min, max));
  };

  return (
    <>
      <Breadcrumb />
      <div className="products">
        <div className="products__left">
          <h4 className="products__left__title">Clothing</h4>
          <h4 className="products__left__title">Price Range</h4>
          <DynamicBounds onPriceChange={onPriceChange} />
        </div>
        <div className="products__right">
          <div className="products__right__header">
            <h3>Clothing</h3>
            <div className="products__right__headerSort">
              <label
                htmlFor="sortProduct"
                className="products__right__headerSortLabel"
              >
                Sort By
              </label>
              <select
                className="products__right__header__select"
                name="sortBy"
                onChange={handleProductSort}
              >
                <option value="Default">Default</option>
                <option value="rating_asc">Rating low to high</option>
                <option value="rating_desc">Rating high to low</option>
                <option value="price_asc">Price low to high</option>
                <option value="price_desc">Price high to low</option>
              </select>
              <div className="products__right__header__grid">
                <GridOnIcon
                  className={`grid ${gridMode && "selected-mode"}`}
                  onClick={setGridMode}
                />
                <GridOffIcon
                  className={`non-grid ${!gridMode && "selected-mode"}`}
                  onClick={setListMode}
                />
              </div>
            </div>
          </div>
          <div
            className={`products__right__productList${
              !gridMode ? "--type-list" : ""
            }`}
          >
            {data.length ===0 && <h3>No data found</h3>}
            {data?.map((product, index) => (
              <div key={index} className="products__right__product">
                {!gridMode ? (
                  <ProductL
                    slug={product.slug}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                ) : (
                  <ProductG
                    slug={product.slug}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
