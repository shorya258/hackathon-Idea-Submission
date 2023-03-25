import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./teamSubCard.css";
const TeamSubCard = (props) => {
  let {
    uniqueID,
    title,
    coverImage,
    summary,
    date,
    isFavourite,
    presentSubmissions,
  } = props;
  let history = useHistory();

  const handleExpandCard = () => {
    history.push({
      pathname: "/ideaDetails",
      state: {
        uniqueID: uniqueID,
        title: title,
        summary: summary,
        date: date,
        isFavourite: isFavourite,
        presentSubmissions: presentSubmissions,
      },
    });
  };
  return (
    <div>
      <Card sx={{ width: "300px" }} className="card-wrapper">
        <CardContent className="card-content" onClick={handleExpandCard}>
          <Typography
            className="card-heading"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography className="card-summary">{summary}</Typography>
          <Typography className="card-date">{date}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default TeamSubCard;
