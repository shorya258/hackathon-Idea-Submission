import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import "./submissions.css";
import SearchIcon from "@mui/icons-material/Search";
import TeamSubCard from "./TeamSubCard";
import { Container } from "muicss/react";

export default function Submissions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleAllSubmissions, setToggleAllSubmissions] = useState(false);
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [showFavourite, toggleShowFavourite] = useState(false);
  const [currentSorting, setCurrentSorting] = useState("");
  const [hardCodedSubmissions, setHardCodedSubmissions] = useState([
    {
      uniqueID: 101,
      title: "InterView Me",
      summary:
        "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
      isFavourite: false,
      date: "Uploaded 6 days ago",
      dateID: "6",
    },
    {
      uniqueID: 102,
      title: "Lorem Ipsum",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec.",
      isFavourite: false,
      date: "Uploaded 8 days ago",
      dateID: "8",
    },
    {
      uniqueID: 103,
      title: "Pizza Ipsum",
      summary: "Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.",
      isFavourite: false,
      date: "Uploaded 12 days ago",
      dateID: "12",
    },
    {
      uniqueID: 104,
      title: "Potter Ipsum",
      summary:
        "Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms.",
      isFavourite: false,
      date: "Uploaded 8 days ago",
      dateID: "8",
    },
    {
      uniqueID: 105,
      title: "Figma Ipsum",
      summary:
        "Figma ipsum component variant main layer. Blur hand object thumbnail subtract flows font bold image. Font.",
      isFavourite: false,
      date: "Uploaded 16 days ago",
      dateID: "16",
    },
    {
      uniqueID: 106,
      title: "Office Ipsum",
      summary: "Office ipsum you must be muted.",
      isFavourite: false,
      date: "Uploaded 28 days ago",
      dateID: "28",
    },
  ]);
  const handleShowFavourite = (currentValue) => {
    if (currentValue === "all") {
      toggleShowFavourite(false);
      filterFavourites(false);
    } else {
      toggleShowFavourite(true);
      filterFavourites(true);
    }
  };
  const filterFavourites = (showFavourite) => {
    handleSearchBar("");
    if (showFavourite) {
      const currentSub = filteredSubmissions.filter((singleSubmission) => {
        return singleSubmission.isFavourite === true;
      });
      setFilteredSubmissions(currentSub);
    } else {
      setFilteredSubmissions(allSubmissions);
    }
  };
  const handleSearchBar = (searchedValue) => {
    setSearchTerm(searchedValue);
    if (searchedValue.length === 0) {
      setFilteredSubmissions(allSubmissions);
    }
  };
  const titleGotSearched = () => {
    const currentSub = allSubmissions.filter((singleSubmission) => {
      return singleSubmission.title.includes(searchTerm);
    });
    setFilteredSubmissions(currentSub);
    console.log(searchTerm);
    console.log(currentSub);
  };

  const handleSorting = (e) => {
    setCurrentSorting(e.target.value);
  };

  useEffect(() => {
    var unSortedSubmissions = filteredSubmissions;
    console.log(unSortedSubmissions);
    unSortedSubmissions = unSortedSubmissions.sort((a, b) =>
      a.uniqueID < b.uniqueID ? 1 : -1
    );
    setFilteredSubmissions(unSortedSubmissions);
  }, [currentSorting]);

  useEffect(() => {
    const storedSubmissions = JSON.parse(
      localStorage.getItem("storedSubmissions")
    );
    if (storedSubmissions.length === 0) {
      localStorage.setItem(
        "storedSubmissions",
        JSON.stringify(hardCodedSubmissions)
      );
      console.log("use eff storedSubmissions", storedSubmissions);
    }
    // console.log("storedSubmissions", storedSubmissions);
    // console.log("...storedSubmissions", ...storedSubmissions);
    if (storedSubmissions != null) {
      setAllSubmissions([...storedSubmissions, ...hardCodedSubmissions]);
      setFilteredSubmissions([...storedSubmissions, ...hardCodedSubmissions]);
    } else {
      setAllSubmissions(hardCodedSubmissions);
      setFilteredSubmissions(hardCodedSubmissions);
    }
  }, []);

  return (
    <div className="menu">
      <Toolbar className="menu-bar">
        <Button
          className={
            showFavourite ? "menu-btn inactive-btn" : "menu-btn active-btn"
          }
          onClick={() => handleShowFavourite("all")}
        >
          All submissions
        </Button>
        <Button
          className={
            showFavourite ? "menu-btn active-btn" : "menu-btn inactive-btn"
          }
          onClick={() => handleShowFavourite("fav")}
        >
          Favourite submissions
        </Button>

        <div className="search-opt">
          <SearchIcon onClick={titleGotSearched} />
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={(e) => handleSearchBar(e.target.value)}
          />
        </div>
        <FormControl sx={{ width: "100px" }} className="drop-down">
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sort by"
            onChange={handleSorting}
            value={currentSorting}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>

      <Container className="cards-display">
        {!toggleAllSubmissions &&
          filteredSubmissions.map((singleIdea) => {
            return (
              <TeamSubCard
                key={singleIdea.uniqueID}
                uniqueID={singleIdea.uniqueID}
                title={singleIdea.title}
                summary={singleIdea.summary}
                date={singleIdea.date}
                isFavourite={singleIdea.isFavourite}
                presentSubmissions={filteredSubmissions}
              />
            );
          })}
        {/* {!toggleAllSubmissions && (
          <TeamSubCard
            title="Interview Me"
            summary="Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview."
            date="Uploaded 6 days ago"
          />
        )}
        {!toggleAllSubmissions && (
          <TeamSubCard
            title="Pirate Ipsum"
            summary="Shiver to tender hempen brig quarterdeck jolly pay. Furl sail crimp furl pinnace."
            date="Uploaded 6 days ago"
          />
        )}
        {!toggleAllSubmissions && (
          <TeamSubCard
            title="Lorem Ipsum"
            summary="Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec."
            date="Uploaded 6 days ago"
          />
        )}
        {!toggleAllSubmissions && (
          <TeamSubCard
            title="Potter Ipsum"
            summary="Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms."
            date="Uploaded 6 days ago"
          />
        )} */}

        {/* {toggleAllSubmissions && <TeamSubCard title={searchTerm} />} */}
      </Container>
    </div>
  );
}
