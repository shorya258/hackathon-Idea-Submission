import React from "react";
import Submissions from "./Submissions";
import UploadSubmission from "./UploadSubmission";

export default function Main() {
  return (
    <>
      <div className="main">
        <UploadSubmission />
        <Submissions />
      </div>
    </>
  );
}
