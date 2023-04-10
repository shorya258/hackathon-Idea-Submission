import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./teamSubCard.css";
// declare all the props
const TeamSubCard = (props) => {
  let {
    uniqueID,
    title,
    coverImg,
    summary,
    description,
    date,
    isFavourite,
    hackathonName,
    startDate,
    endDate,
    gitLink,
    otherLink,
  } = props;

  let history = useHistory();
  //sending data to "expandCard.js"
  const handleExpandCard = () => {
    history.push({
      pathname: "/ideaDetails",
      state: {
        uniqueID,
        title,
        summary,
        description,
        date,
        startDate,
        endDate,
        coverImg,
        isFavourite,
        hackathonName,
        gitLink,
        otherLink,
      },
    });
  };
  // function to convert "date user uploaded submission" to "uploaded n days ago" format
  const getUploadedDaysByDate = (date) => {
    const uploadedDate = new Date(date);
    const currentDate = new Date();
    const uploadedDays = Math.floor(
      (currentDate - uploadedDate) / (1000 * 60 * 60 * 24)
    );
    if (uploadedDays === 0) {
      return "Uploaded just now";
    } else {
      return `${uploadedDays} days ago`;
    }
  };
  return (
    <div>
      <Card
        sx={{ width: "400px" }}
        className="card-wrapper"
        onClick={handleExpandCard}
      >
        <CardContent className="card-content">
          <div className="card-header">
            <img src={coverImg} alt="cover img" className="coverImg" />

            <Typography
              className="card-heading"
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
          </div>
          <Typography className="card-summary">{summary}</Typography>
          <Typography className="card-date">
            {getUploadedDaysByDate(date)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default TeamSubCard;
