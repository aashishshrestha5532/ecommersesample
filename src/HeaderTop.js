import React from "react";
import "./HeaderTop.css";

export default function HeaderTop() {
  return (
    <div className="headertop">
      <div className="headertop-fill">
        <div className="headertop__contacts">
          <div className="headertop__contactNumber">
            <img
              src={process.env.PUBLIC_URL + "/phone.png"}
              className="headertop__contactIcon"
              alt=""
            />
            977-98041XXXXX / 061XXXXXX
          </div>
          <div className="headertop__contactNumber">
            <img
              src={process.env.PUBLIC_URL + "/whatsup.png"}
              className="headertop__contactIcon"
              alt=""
            />{" "}
            98058XXXXX
          </div>
        </div>
        <div className="headertop__links">
          <label className="headertop__link">Become IMP</label>
          <label className="headertop__link">Earn and Share</label>
          <label className="headertop__link">Job</label>
          <label className="headertop__link">Sell your Product</label>
          <label className="headertop__link">Account</label>
        </div>
      </div>
    </div>
  );
}
