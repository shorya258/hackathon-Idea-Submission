import React, { useState, useEffect } from "react";
import "./hackathonForm.css";
import { useHistory, useLocation } from "react-router-dom";
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

  useEffect(() => {
    console.log(location.state);
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
            <input
              type="file"
              onChange={(event) => {
                handleImageUpload(event.target.files[0]);
              }}
            />
            <img src={coverImg} alt="upload button" />
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
