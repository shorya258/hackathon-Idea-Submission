import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./expandCard.css";
import { Description, Edit } from "@mui/icons-material";
const ExpandCard = () => {
  const location = useLocation();
  let history = useHistory();
  let storedSubmissions = JSON.parse(localStorage.getItem("storedSubmissions"));
  const submissionDetails = location.state;
  const uniqueID = location.state.uniqueID;
  const title = location.state.title;
  const coverImg = location.state.coverImg;
  const summary = location.state.summary;
  const description = location.state.description;
  const hackathonName = location.state.hackathonName;
  const date = location.state.date;
  const isFavourite = location.state.isFavourite;
  const [currentFavouriteState, toggleCurrentFavouriteState] =
    useState(isFavourite);
  const handleEditSubmission = () => {
    history.push({
      pathname: "/submitHackathonIdea",
      state: {
        submissionDetails,
      },
    });
  };
  const handleDeleteSubmission = () => {
    for (let i = 0; i < storedSubmissions.length; i++) {
      var singleSubmission = storedSubmissions[i];
      if (singleSubmission.uniqueID === uniqueID) {
        storedSubmissions.splice(i, i);
        localStorage.setItem(
          "storedSubmissions",
          JSON.stringify(storedSubmissions)
        );

        console.log("after deleting", storedSubmissions);
        history.push("./");
      }
    }
  };
  const handleFavourite = () => {
    // storedSubmissions =
    //   storedSubmissions == null ? presentSubmissions : storedSubmissions;

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
  const getUploadedDaysByDate = (date) => {
    const uploadedDate = new Date(date);
    const currentDate = new Date();
    const uploadedDays = Math.floor(
      (currentDate - uploadedDate) / (1000 * 60 * 60 * 24)
    );
    // console.log("uploadedDate", uploadedDate, "currentDate", currentDate,);
    if (uploadedDays === 0) {
      return "Uploaded just now";
    } else {
      return `${uploadedDays}days ago`;
    }
  };

  return (
    <>
      <div className="expanded-card-wrapper">
        <div className="idea-heading">
          <div className="content-wrapper">
            <h1 className="heading">{title}</h1>
            <img src={coverImg} className="card-img" />
            {!isFavourite && (
              <StarBorderOutlinedIcon onClick={handleFavourite} />
            )}
            <p>{summary}</p>
            {isFavourite && <StarIcon onClick={handleFavourite} />}

            <span>{currentFavouriteState ? "yes" : "no"}</span>

            <p> {getUploadedDaysByDate(date)}</p>
          </div>
        </div>
        <div className="btn-div">
          <div className="edit-button btn-child">
            <EditIcon onClick={handleEditSubmission} />
            <p>Edit</p>
          </div>
          <div className="editButton btn-child">
            <DeleteIcon onClick={handleDeleteSubmission} />
            <p>Delete</p>
          </div>
        </div>

        {/* <button>Edit</button> */}

        {/* <button onClick>Delete</button> */}
      </div>
      <div className="card-details-content">
        <div className="description">{description}</div>
        <div className="hackathonName">{hackathonName}</div>
      </div>
    </>
  );
};
export default ExpandCard;
