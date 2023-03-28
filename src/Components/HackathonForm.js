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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [otherLink, setOtherLink] = useState("");
  const [errorsObj, setErrorsObj] = useState();
  // form is accessed when user clicks on Upload Submission on the first page AND when user clicks on edit option when a submission is expanded
  const handleSubmitHackathon = (e) => {
    e.preventDefault();

    // when all the parameters have some value in them meaning user wishes to edit it
    if (location.state !== undefined) {
      handleEditSubmission();
      return;
    }
    // otherwise user wishes to enter a new submission
    // UPLOADING A NEW SUBMISSION
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
      startDate,
      endDate,
      gitLink,
      otherLink,
      date: new Date(),
    };
    if (!validateFormValues(newHackathonSubmission)) {
      return;
    }
    let storedSubmissions = JSON.parse(
      localStorage.getItem("storedSubmissions")
    );
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
    // after entering the submission details and pressing upload submission button, user is redirected to home
    history.push("/");
  };
  const validateFormValues = (newHackathonSubmission) => {
    const generatedErrors = {};
    const regex =
      /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    if (newHackathonSubmission.title.trim().length === 0) {
      generatedErrors.title = "Title can not be empty!";
    } else if (newHackathonSubmission.title.trim().length < 4) {
      generatedErrors.title = "Title should be at least four characters long!";
    }
    if (newHackathonSubmission.summary.trim().length === 0) {
      generatedErrors.summary = "summary can not be empty!";
    } else if (newHackathonSubmission.summary.trim().length < 4) {
      generatedErrors.summary =
        "summary should be at least four characters long!";
    }
    if (newHackathonSubmission.description.trim().length === 0) {
      generatedErrors.description = "description can not be empty!";
    }
    if (newHackathonSubmission.hackathonName.trim().length === 0) {
      generatedErrors.hackathonName = "Hackathon Name can not be empty!";
    } else if (newHackathonSubmission.hackathonName.trim().length < 4) {
      generatedErrors.hackathonName =
        "Hackathon Name should be at least four characters long!";
    }
    if (newHackathonSubmission.coverImg === null) {
      generatedErrors.coverImg = "Choose a cover image!";
    }
    if (newHackathonSubmission.gitLink.trim().length === 0) {
      generatedErrors.gitLink = "GitHub Repository URL can not be empty!";
    } else if (!regex.value(newHackathonSubmission.gitLink.trim())) {
      generatedErrors.gitLink = "Enter a valid URL for GitHub Repository!";
    }
    if (newHackathonSubmission.startDate.length === 0) {
      generatedErrors.startDate = "Start Date cannot not be empty!";
    }
    if (newHackathonSubmission.endDate.length === 0) {
      generatedErrors.endDate = "End Date cannot not be empty!";
    }
    if (newHackathonSubmission.startDate > newHackathonSubmission.endDate) {
      generatedErrors.startGreaterThanEndDate =
        "Start Date should be less than End Date!";
    }
    // console.log(coverImg, typeof coverImg);
    setErrorsObj(generatedErrors);
    console.log(generatedErrors);
  };
  //EDITING an hackathon submission detail
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
      startDate,
      endDate,
      gitLink,
      otherLink,
      date,
    };
    if (!validateFormValues(editedHackathonSubmission)) {
      return;
    }
    let storedSubmissions = JSON.parse(
      localStorage.getItem("storedSubmissions")
    );
    // check all the existing submissions and if the uniqueID of my present submission matches with the uniqueID of any submissions, then reflect all the edits in it
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
  // Store the uploaded image in the form of readable url which can later again converted into the image when need to be fetched
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setCoverImg(reader.result);
    });
    reader.readAsDataURL(file);
  };
  const clickImageUpload = () => {
    document.getElementById("cover-img-upload-input").click();
  };

  // updating the values of all the parameters
  useEffect(() => {
    if (location.state !== undefined) {
      let editSubmissionDetails = location.state.submissionDetails;
      setUniqueID(editSubmissionDetails.uniqueID);
      setTitle(editSubmissionDetails.title);
      setSummary(editSubmissionDetails.summary);
      setDescription(editSubmissionDetails.description);
      setDate(editSubmissionDetails.date);
      setStartDate(editSubmissionDetails.startDate);
      setEndDate(editSubmissionDetails.endDate);
      setIsFavourite(editSubmissionDetails.isFavourite);
      setCoverImg(editSubmissionDetails.coverImg);
      setHackathonName(editSubmissionDetails.hackathonName);
      setGitLink(editSubmissionDetails.gitLink);
      setOtherLink(editSubmissionDetails.otherLink);
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
            variant="outlined"
            placeholder="Title of your submission"
            value={title}
            required={true}
            // update title whenever changed
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {errorsObj !== undefined && errorsObj.title !== undefined && (
            <legend className="error-dialog">{errorsObj.title}</legend>
          )}
        </Box>

        <Box className="form-input summary">
          <legend className="form-heading">Summary</legend>
          <TextField
            className="input-value"
            placeholder="A short summary of your submission. This will be visible with your submission"
            value={summary}
            required={true}
            // update summary whenever changed
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
          {errorsObj !== undefined && errorsObj.summary !== undefined && (
            <legend className="error-dialog">{errorsObj.summary}</legend>
          )}
        </Box>

        <Box className="form-input description">
          <legend className="form-heading">Description</legend>
          <TextField
            className="input-value description-input"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            value={description}
            required={true}
            // update description whenever changed
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {errorsObj !== undefined && errorsObj.description !== undefined && (
            <legend className="error-dialog">{errorsObj.description}</legend>
          )}
          <p className="character-length">
            {description.length}-3000 characters
          </p>
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
              src={coverImg === null ? Upload : coverImg}
              alt="upload button"
              className="cover-image"
              onClick={clickImageUpload}
            />
          </button>
          {errorsObj !== undefined && errorsObj.coverImg !== undefined && (
            <legend className="error-dialog">{errorsObj.coverImg}</legend>
          )}
        </Box>

        <Box className="form-input hackthonName">
          <legend className="form-heading">Hackathon Name</legend>
          <TextField
            className="input-value"
            required={true}
            placeholder="Enter the name of the hackathon."
            value={hackathonName}
            // update hackathonName whenever changed
            onChange={(e) => {
              setHackathonName(e.target.value);
            }}
          />
          {errorsObj !== undefined && errorsObj.hackathonName !== undefined && (
            <legend className="error-dialog">{errorsObj.hackathonName}</legend>
          )}
        </Box>
        <Box className="form-input start-date">
          <legend className="form-heading">Hackathon Start date</legend>
          <form className="form-input-date">
            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="Start Date"
              className="form-input-date-child"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </form>
          {errorsObj !== undefined && errorsObj.startDate !== undefined && (
            <legend className="error-dialog">{errorsObj.startDate}</legend>
          )}
        </Box>
        <Box className="form-input end-date">
          <legend className="form-heading">Hackathon End date</legend>
          <form className="form-input-date">
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="End Date"
              className="form-input-date-child"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </form>

          {errorsObj !== undefined && errorsObj.endDate !== undefined && (
            <legend className="error-dialog">{errorsObj.endDate}</legend>
          )}

          {errorsObj !== undefined &&
            errorsObj.startGreaterThanEndDate !== undefined && (
              <legend className="error-dialog">
                {errorsObj.startGreaterThanEndDate}
              </legend>
            )}
        </Box>

        <Box className="form-input github-link">
          <legend className="form-heading">GitHub Repository</legend>
          <TextField
            id="outlined-basic"
            className="input-value"
            variant="outlined"
            placeholder="Enter your GitHub Repository"
            value={gitLink}
            required={true}
            // update GitHub Repository whenever changed
            onChange={(e) => {
              setGitLink(e.target.value);
            }}
          />
          {errorsObj !== undefined && errorsObj.gitLink !== undefined && (
            <legend className="error-dialog">{errorsObj.gitLink}</legend>
          )}
        </Box>
        <Box className="form-input other-link">
          <legend className="form-heading">Other Links</legend>
          <TextField
            id="outlined-basic"
            className="input-value"
            variant="outlined"
            placeholder="You can upload a video demo or URL of you demo app here."
            value={otherLink}
            required={true}
            // update Other Links whenever changed
            onChange={(e) => {
              setOtherLink(e.target.value);
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
