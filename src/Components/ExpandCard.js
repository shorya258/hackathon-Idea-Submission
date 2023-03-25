import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import "./expandCard.css";
import { Description } from "@mui/icons-material";
const ExpandCard = () => {
  const location = useLocation();
  let storedSubmissions = JSON.parse(localStorage.getItem("storedSubmissions"));
  const uniqueID = location.state.uniqueID;
  const title = location.state.title;
  const summary = location.state.summary;
  const description = location.state.description;
  const date = location.state.date;
  const isFavourite = location.state.isFavourite;
  const presentSubmissions = location.state.presentSubmissions;
  console.log("presentSubmissions", presentSubmissions);
  const [currentFavouriteState, toggleCurrentFavouriteState] =
    useState(isFavourite);

  const handleFavourite = () => {
    storedSubmissions =
      storedSubmissions == null ? presentSubmissions : storedSubmissions;

    for (let i = 0; i < storedSubmissions.length; i++) {
      var singleSubmission = storedSubmissions[i];
      if (singleSubmission.uniqueID === uniqueID) {
        // console.log(singleSubmission);
        singleSubmission.isFavourite = !singleSubmission.isFavourite;
        toggleCurrentFavouriteState(singleSubmission.isFavourite);
        localStorage.setItem(
          "storedSubmissions",
          JSON.stringify(storedSubmissions)
        );
      }
    }
    console.log("storedSubmissions", storedSubmissions);
  };

  return (
    <div className="expanded-card-wrapper">
      <div className="idea-heading">
        <div className="content-wrapper">
          <h1 className="heading">{title}</h1>

          {!isFavourite && <StarBorderOutlinedIcon onClick={handleFavourite} />}
          <p>{summary}</p>
          {isFavourite && <StarIcon onClick={handleFavourite} />}

          <span>{currentFavouriteState ? "yes" : "no"}</span>

          <p>{date}</p>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
export default ExpandCard;
