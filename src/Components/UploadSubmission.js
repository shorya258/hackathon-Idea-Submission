import { Button } from "@mui/material";
import React from "react";
import "./UploadSubmission.css";
import { useHistory } from "react-router-dom";
import handBulbImage from "../assets/handBulbImage.png";
const UploadSubmission = () => {
  let history = useHistory();
  return (
    <div className="UploadSubmission">
      <div className="content-wrapper">
        <h1 className="heading">Hackathon Submissions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque
          in parturient purus feugiat faucibus. Congue laoreet duis porta turpis
          eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae.
        </p>
        {/* redirect to hackathon form when button is clicked */}
        <Button onClick={() => history.push("/submitHackathonIdea")}>
          Upload Submission
        </Button>
      </div>
      <div className="image-wrapper">
        <img src={handBulbImage} alt="hand and bulb" />
      </div>
    </div>
  );
};
export default UploadSubmission;
