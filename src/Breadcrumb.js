import React from "react";
import "./Breadcrumb.css";
import {
  ChevronRight as ArrowRightIcon,
  Home as HomeIcon,
} from "@material-ui/icons";
import {Link} from 'react-router-dom'

export default function Breadcrumb({data}) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__row">
        <ul>
          <li>
            <Link to="/" className="breadcrumb__rowIcon">
              <HomeIcon style={{ fontSize: 25 ,color:'#000'}} />
            </Link>
          </li>
          <li>
            {" "}
            <ArrowRightIcon style={{ fontSize: 20 }} />
            <label>Mens</label>
          </li>
          <li>
            {" "}
            <ArrowRightIcon style={{ fontSize: 20 }} />
            <label>Tshirt</label>
          </li>
          <li>
            {" "}
            <ArrowRightIcon style={{ fontSize: 20 }} />
            <label className="breadcrumb__lastItem">Puma</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
