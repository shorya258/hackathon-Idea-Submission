import React, { useState, useEffect } from "react";
import "./hackathonForm.css";
import { useHistory, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import Upload from "../assets/Upload.png";
export default function HackathonForm(props) {
  let history = useHistory();
  const location = useLocation();
  const [uniqueID, setUniqueID] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);
  const [coverImg, setCoverImg] = useState(null);
  const [description, setDescription] = useState("");
  const [hackathonName, setHackathonName] = useState("");
  // console.log("edit props", );

  const handleSubmitHackathon = (e) => {
    e.preventDefault();

    if (location.state !== undefined) {
      handleEditSubmission();
      return;
    }
    const uniqueID = JSON.stringify(new Date().getTime());
    console.log(uniqueID, title, summary, isFavourite);
    const newHackathonSubmission = {
      uniqueID,
      title,
      summary,
      isFavourite,
      coverImg,
      description,
      hackathonName,
      date: new Date(),
    };
    // console.log(localStorage.getItem("storedSubmissions"));
    let storedSubmissions = JSON.parse(
      localStorage.getItem("storedSubmissions")
    );
    // console.log("stored submissions", storedSubmissions);
    if (storedSubmissions == null) {
      const createdSubmissionList = [newHackathonSubmission];
      localStorage.setItem(
        "storedSubmissions",
        JSON.stringify(createdSubmissionList)
      );
    } else {
      storedSubmissions.push(newHackathonSubmission);
      localStorage.setItem(
        "storedSubmissions",
        JSON.stringify(storedSubmissions)
      );
    }
    history.push("/");
  };
  //editing an hackathon submission detail
  const handleEditSubmission = () => {
    const editedHackathonSubmission = {
      uniqueID,
      title,
      summary,
      description,
      hackathonName,
      isFavourite,
      description,
      coverImg,
      date,
    };
    let storedSubmissions = JSON.parse(
      localStorage.getItem("storedSubmissions")
    );
    for (let i = 0; i < storedSubmissions.length; i++) {
      if (storedSubmissions[i].uniqueID === uniqueID) {
        storedSubmissions[i] = editedHackathonSubmission;
        localStorage.setItem(
          "storedSubmissions",
          JSON.stringify(storedSubmissions)
        );
      }
    }
    history.push("/");
  };
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
      setCoverImg(reader.result);
    });
    reader.readAsDataURL(file);
  };
  const clickImageUpload = () => {
    document.getElementById("cover-img-upload-input").click();
  };
  useEffect(() => {
    // console.log(location.state);
    if (location.state !== undefined) {
      let editSubmissionDetails = location.state.submissionDetails;
      setUniqueID(editSubmissionDetails.uniqueID);
      setTitle(editSubmissionDetails.title);
      setSummary(editSubmissionDetails.summary);
      setDescription(editSubmissionDetails.description);
      setDate(editSubmissionDetails.date);
      setIsFavourite(editSubmissionDetails.isFavourite);
      setCoverImg(editSubmissionDetails.coverImg);
      setHackathonName(editSubmissionDetails.hackathonName);
    }
  }, []);

  return (
    <div className="form-page">
      <Box className="hackathon-form">
        <h2>New Hackathon Submission</h2>

        {/* title */}
        <Box className="form-input title">
          <legend className="form-heading">Title</legend>
          <TextField
            id="outlined-basic"
            className="input-value"
            // label="Outlined"
            variant="outlined"
            placeholder="Title of your submission"
            value={title}
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Box>

        <Box className="form-input summary">
          <legend className="form-heading">Summary</legend>
          <TextField
            className="input-value"
            placeholder="A short summary of your submission. This will be visible with your submission"
            value={summary}
            required={true}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
        </Box>

        <Box className="form-input description">
          <legend className="form-heading">Description</legend>
          <TextField
            className="input-value"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            value={description}
            required={true}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <p className="character-length">0-300 characters</p>
        </Box>

        <Box className="form-input cover-img-wrapper">
          <legend className="form-heading">Cover Image</legend>
          <p className="cover-img-info">Minimum Resolution: 360px X 360px</p>
          <button
            className="cover-img-upload-button"
            variant="contained"
            component="label"
          >
            <input
              id="cover-img-upload-input"
              className="cover-image-input"
              type="file"
              onChange={(event) => {
                handleImageUpload(event.target.files[0]);
              }}
            />
            <img
              src={location.state !== undefined ? coverImg : Upload}
              alt="upload button"
              className="cover-image"
              onClick={clickImageUpload}
            />
          </button>
        </Box>

        <Box className="form-input hackthonName">
          <legend className="form-heading">Hackathon Name</legend>
          <TextField
            className="input-value"
            required={true}
            placeholder="Enter the name of the hackathon."
            value={hackathonName}
            onChange={(e) => {
              setHackathonName(e.target.value);
            }}
          />
        </Box>

        <Button
          variant="raised"
          onClick={(e) => {
            handleSubmitHackathon(e);
          }}
          className="submit-button"
        >
          Upload Submission
        </Button>
      </Box>
    </div>
  );
}
