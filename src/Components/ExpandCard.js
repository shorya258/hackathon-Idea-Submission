import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./expandCard.css";
import { CalendarToday } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
const ExpandCard = () => {
  const location = useLocation();
  let history = useHistory();
  let storedSubmissions = JSON.parse(localStorage.getItem("storedSubmissions"));
  // get all the values sent from TeamSubCard.js
  const submissionDetails = location.state;
  const uniqueID = location.state.uniqueID;
  const title = location.state.title;
  const coverImg = location.state.coverImg;
  const summary = location.state.summary;
  const description = location.state.description;
  const hackathonName = location.state.hackathonName;
  const date = location.state.date;
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;
  const gitLink = location.state.gitLink;
  const otherLink = location.state.otherLink;
  const isFavourite = location.state.isFavourite;
  const [currentFavouriteState, toggleCurrentFavouriteState] =
    useState(isFavourite);
  const [open, setOpen] = useState(false);
  // handle modal open when clicked on delete option
  const handleOpen = () => setOpen(true);
  // handle modal close
  const handleClose = () => setOpen(false);
  // converts the date into month
  const getMonthWiseDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const newDay = new Date(date).getDate();
    const newMonth = months[new Date(date).getMonth()];
    return newDay + " " + newMonth;
  };

  // when clicked on edit submission, redirect to HackathonForm.js
  const handleEditSubmission = () => {
    history.push({
      pathname: "/submitHackathonIdea",
      state: {
        submissionDetails,
      },
    });
  };
  // Handle delete submission
  const handleDeleteSubmission = () => {
    for (let i = 0; i < storedSubmissions.length; i++) {
      var singleSubmission = storedSubmissions[i];
      if (singleSubmission.uniqueID === uniqueID) {
        storedSubmissions.splice(i, i);
        localStorage.setItem(
          "storedSubmissions",
          JSON.stringify(storedSubmissions)
        );
        // redirect to home page after deleting
        history.push("./");
      }
    }
  };

  // make a submission favourite or make a favourite submission not favourite
  const handleFavourite = () => {
    for (let i = 0; i < storedSubmissions.length; i++) {
      var singleSubmission = storedSubmissions[i];
      if (singleSubmission.uniqueID === uniqueID) {
        singleSubmission.isFavourite = !singleSubmission.isFavourite;
        toggleCurrentFavouriteState(singleSubmission.isFavourite);
        localStorage.setItem(
          "storedSubmissions",
          JSON.stringify(storedSubmissions)
        );
      }
    }
  };

  return (
    <>
      <div className="expanded-card-wrapper">
        <div className="idea-heading">
          <div className="expanded-content-wrapper">
            <div className="heading-wrapper">
              <img src={coverImg} alt="cover" className="expanded-card-img" />
              <h1 className="expanded-heading">{title}</h1>
            </div>
            <p className="summary-text">{summary}</p>
            <div className="content-footer-wrapper">
              {currentFavouriteState ? (
                <StarIcon
                  className="favourite-icon"
                  onClick={handleFavourite}
                />
              ) : (
                <StarBorderOutlinedIcon
                  className="favourite-icon"
                  onClick={handleFavourite}
                />
              )}
              <p className="uploaded-date-text">
                {<CalendarToday className="calender-icon" />}
                <span>{getMonthWiseDate(date)}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="btn-div">
          {/* EDIT BUTTON */}
          <div className="edit-button btn-child" onClick={handleEditSubmission}>
            <EditIcon className="expanded-icon" />
            <p>Edit</p>
          </div>

          {/* DELETE BUTTON */}
          <div className="delete-button btn-child" onClick={handleOpen}>
            <DeleteIcon className="expanded-icon" />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Delete Model
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <p>
                    This action is irreversible. Are you sure you want to delete
                    this model?
                  </p>
                  <div className="modal-options">
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => {
                        history.push({
                          pathname: "/",
                        });
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleDeleteSubmission}
                      color="error"
                    >
                      Delete
                    </Button>
                  </div>
                </Typography>
              </Box>
            </Modal>
            <p>Delete</p>
          </div>
        </div>

        {/* <button>Edit</button> */}

        {/* <button onClick>Delete</button> */}
      </div>
      <div className="card-details-content">
        <div className="card-details-left">
          <h2 className="desc-heading">Description</h2>
          <p className="desc-summary">{description}</p>
        </div>
        <div className="card-details-right">
          <div className="hackathonDetails">
            <h2>Hackathon</h2>
            <p>{hackathonName}</p>
          </div>
          <div className="duration-dates">
            <CalendarToday sx={{ width: "15px" }} />
            <p>
              {getMonthWiseDate(startDate)} - {getMonthWiseDate(endDate)}
            </p>
          </div>
          <div className="links">
            <div
              className="github-link"
              onClick={() => {
                window.open(gitLink, "_blank");
              }}
            >
              <GitHubIcon className="expanded-icon" />
              <p>GitHub Repository</p>
            </div>
            <div
              className="other-links"
              onClick={() => {
                window.open(otherLink, "_blank");
              }}
            >
              <LaunchIcon className="expanded-icon" />
              <p>Other link</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpandCard;
