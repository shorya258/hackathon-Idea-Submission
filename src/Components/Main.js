import React from "react";
import Submissions from "./Submissions";
import UploadSubmission from "./UploadSubmission";

export default function Main() {
  return (
    <>
      <div className="main">
        {/* Upload Submission when clicked opens HackathonForm  */}
        <UploadSubmission />
        {/* Display all present submissions and filters related to them */}
        <Submissions />
      </div>
    </>
  );
}
