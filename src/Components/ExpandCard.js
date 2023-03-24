import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const ExpandCard = () => {
  const location = useLocation();
  let storedSubmissions = JSON.parse(localStorage.getItem("storedSubmissions"));
  const uniqueID = location.state.uniqueID;
  const title = location.state.title;
  const summary = location.state.summary;
  const date = location.state.date;
  const isFavourite = location.state.isFavourite;
  //   console.log("prop",isFavourite);
  const [currentFavouriteState, toggleCurrentFavouriteState] =
    useState(isFavourite);

  const handleFavourite = () => {
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
    console.log(storedSubmissions);
  };

  return (
    <>
      <div className="idea-heading">
        <div className="content-wrapper">
          <h1 className="heading">{title}</h1>
          <button onClick={handleFavourite}>fav </button>
          <span>{currentFavouriteState ? "yes" : "no"}</span>
          <p>{summary}</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};
export default ExpandCard;
