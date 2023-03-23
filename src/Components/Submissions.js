import { Toolbar } from "@mui/material";
import React from "react";
import "./submissions.css";
import SearchIcon from "@mui/icons-material/Search";
export default function Submissions() {
  return (
    <div className="menu">
      <Toolbar>
        <button>All submissions</button>
        <button> Favourite Submission</button>
        <div className="searchOpt">
          <SearchIcon />
          Search
        </div>
        <button>Sort by</button>
      </Toolbar>
    </div>
  );
}
