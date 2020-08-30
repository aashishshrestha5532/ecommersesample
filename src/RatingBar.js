import React from "react";
import {
  StarBorder as StarOutlineIcon,
  Star as StarFillIcon,
} from "@material-ui/icons";

const RatingBar = ({ input }) => {
  return (
      <div className="rating-bar">
        {Array(5)
          .fill(0)
          .map((x, index) =>
            index + 1 < input ? (
              <StarFillIcon
                key={index}
                style={{ fontSize: 18, color: "#d68215" }}
              />
            ) : (
              <StarOutlineIcon key={index} style={{ fontSize: 18 }} />
            )
          )}
      </div>
  );
};

export default RatingBar;
