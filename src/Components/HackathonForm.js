import React, { useState, useEffect } from "react";
// import form from "muicss/lib/react/form";
// import input from "muicss/lib/react/input";
// import button from "muicss/lib/react/button";
import "./hackathonForm.css";
import Upload from "../assets/Upload.png";
import { Image } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
export default function HackathonForm() {
  let history = useHistory();
  // const [uniqueId, setUniqueId] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  // useEffect(() => {
  //   console.log(title);
  // }, [title, summary]);

  // const [description, setDescription]= useState("");
  const handleSubmitHackathon = (e) => {
    e.preventDefault();
    const uniqueID = JSON.stringify(new Date().getTime());
    console.log(uniqueID, title, summary, isFavourite);
    const newHackathonSubmission = {
      uniqueID,
      title,
      summary,
      isFavourite,
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

  return (
    <div className="form-page">
      <form className="hackathon-form">
        <h2>New Hackathon Submission</h2>
        <div className="form-input">
          <legend className="form-heading">Title</legend>
          <input
            placeholder="Title of your submission"
            value={title}
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-input">
          <legend className="form-heading">Summary</legend>
          <input
            placeholder="A short summary of your submission. This will be visible with your submission"
            value={summary}
            required={true}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
        </div>
        <div className="form-input">
          <legend className="form-heading">Description</legend>
          <input placeholder="Write a long description of your project. You can describe your idea and approach here." />
          <p>0/300 characters</p>
        </div>
        <div className="form-input">
          <legend className="form-heading">Cover Image</legend>
          <p>Minimum Resolution: 360px X 360px</p>
          <button variant="contained" component="label">
            <input type="file" />
            <img src={Upload} alt="upload button" />
          </button>
        </div>
        <div className="form-input">
          <legend className="form-heading">Hackathon Name</legend>
          <input
            required={true}
            placeholder="Enter the name of the hackathon."
          />
        </div>

        <button
          variant="raised"
          onClick={(e) => {
            handleSubmitHackathon(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
