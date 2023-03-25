import { Card, CardContent, CardMedia, Typography } from "@mui/material";
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
        description: description,
        date: date,
        coverImg: coverImg,
        isFavourite: isFavourite,
        presentSubmissions: presentSubmissions,
      },
    });
  };
  return (
    <div>
      <Card sx={{ width: "300px" }} className="card-wrapper">
        <CardContent className="card-content" onClick={handleExpandCard}>
          <img src={coverImg} />

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
