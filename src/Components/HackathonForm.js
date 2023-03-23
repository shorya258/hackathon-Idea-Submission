import React from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import "./hackathonForm.css";
import Upload from "../assets/Upload.png";
import { Image } from "@mui/icons-material";
export default function HackathonForm() {
  return (
    <div className="form-page">
      <Form className="hackathon-form">
        <h2>New Hackathon Submission</h2>
        <div className="form-input">
          <legend className="form-heading">Title</legend>
          <Input placeholder="Title of your submission" />
        </div>
        <div className="form-input">
          <legend className="form-heading">Summary</legend>
          <Input placeholder="A short summary of your submission. This will be visible with your submission" />
        </div>
        <div className="form-input">
          <legend className="form-heading">Description</legend>
          <Input placeholder="Write a long description of your project. You can describe your idea and approach here." />
          <p>0/300 characters</p>
        </div>
        <div className="form-input">
          <legend className="form-heading">Cover Image</legend>
          <p>Minimum Resolution: 360px X 360px</p>
          <Button variant="contained" component="label">
            <input type="file" hidden />
            <img src={Upload} />
          </Button>
        </div>
        <div className="form-input">
          <legend className="form-heading">Hackathon Name</legend>
          <Input placeholder="Enter the name of the hackathon." />
        </div>

        <Button variant="raised">Submit</Button>
      </Form>
    </div>
  );
}
