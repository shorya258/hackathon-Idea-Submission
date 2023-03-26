import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./teamSubCard.css";
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
    presentSubmissions,
  } = props;
  let history = useHistory();
  //sending data to expand card
  const handleExpandCard = () => {
    history.push({
      pathname: "/ideaDetails",
      state: {
        uniqueID: uniqueID,
        title: title,
        summary: summary,
        description: description,
        date: date,
        coverImg: coverImg,
        isFavourite: isFavourite,
        hackathonName: hackathonName,
      },
    });
  };
  const getUploadedDaysByDate = (date) => {
    const uploadedDate = new Date(date);
    const currentDate = new Date();
    const uploadedDays = Math.floor(
      (currentDate - uploadedDate) / (1000 * 60 * 60 * 24)
    );
    // console.log("uploadedDate", uploadedDate, "currentDate", currentDate,);
    if (uploadedDays === 0) {
      return "Uploaded just now";
    } else {
      return `${uploadedDays}days ago`;
    }
  };
  return (
    <div>
      <Card sx={{ width: "300px" }} className="card-wrapper">
        <CardContent className="card-content">
          <div className="card-header" onClick={handleExpandCard}>
            <img src={coverImg} className="coverImg" />

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
