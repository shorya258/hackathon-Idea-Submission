import { Button, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./submissions.css";
import SearchIcon from "@mui/icons-material/Search";
import TeamSubCard from "./TeamSubCard";
import office from "../assets/officeIpsum.png";
import pizzaIpsum from "../assets/pizzaIpsum.png";
import potterImg from "../assets/potterImg.png";
import loremIpsum from "../assets/loremIpsum.png";
import interviewMe from "../assets/interviewMe.png";
import figmaIpsum from "../assets/figmaIpsum.png";

export default function Submissions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [showFavourite, toggleShowFavourite] = useState(false);
  const [currentSorting, setCurrentSorting] = useState("newest");
  const [cardAlignment, setCardAlignment] = useState("");
  // hardCoded values for pre-existing submissions
  const [hardCodedSubmissions, _] = useState([
    {
      uniqueID: 101,
      title: "InterView Me",
      summary:
        "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
      description:
        "Lorem ipsum cusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium cusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium cusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium cusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium cusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium  sit amet consectetur adipisicing elit. Mollitia et nihil consectetur, ab ratione molestias voluptatibus non soluta provident aliquam possimus facere explicabo ",
      isFavourite: false,
      date: new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000),
      coverImg: interviewMe,
      hackathonName: "hackathon-1",
      gitLink: "https://github.com/",
      otherLink: "https://www.google.com/",
      startDate: "2023-07-06",
      endDate: "2023-07-09",
    },
    {
      uniqueID: 102,
      title: "Lorem Ipsum",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec.",
      description:
        "Lorem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium cusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium cusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventororem ipsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventoripsum nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventor",
      isFavourite: true,
      date: new Date(new Date().getTime() - 12 * 24 * 60 * 60 * 1000),
      coverImg: loremIpsum,
      hackathonName: "hackathon-2",
      gitLink: "https://github.com/",
      otherLink: "https://www.google.com/",
      startDate: "2023-09-10",
      endDate: "2023-09-12",
    },
    {
      uniqueID: 103,
      title: "Pizza Ipsum",
      summary: "Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.",
      description:
        "Lorem ipsum dolorDolor harum rerum, ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventornam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consecteturem ipsum dolorDolor harum rerum, ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed sit amet consectetur adipisicing elit. Mollitia et nihil consectetur",
      isFavourite: true,
      date: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000),
      coverImg: pizzaIpsum,
      hackathonName: "pizzaIpsum",
      gitLink: "https://github.com/",
      otherLink: "https://www.google.com/",
      startDate: "2024-12-20",
      endDate: "2024-12-23",
    },
    {
      uniqueID: 104,
      title: "Potter Ipsum",
      summary:
        "Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam temporibus quam nobis consequuntur quos accusamus exercitationem veniam laboriosam tempora voluptatum, consequatur in assumenda ut commodi excepturi, mollitia dolores opmaxime cupiditate voluptatibus magni deleniti, distinctio dignissimos vitae illo reprehenderit sequi repellendus iusto odit labore molestias hic. Ratione sint in ullam incidunt esse ipsam velit vitae nemo commodi, molestias dicta! Totam maiores quas architecto deleniti dicta optio ut at tempore est reiciendis. Dolor harum rerum, ex saex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sedsed mollitia! Nobis sitmaxime cupiditate voluptatibus magni deleniti, distinctio dignissimos vitae illo reprehenderit sequi repellendus iusto odit labore molestias hic. Ratione sint in ullam incidunt esse ipsam velit vitae nemo commodi, molestias dicta! Totam maiores quas architecto deleniti dicta optio ut at tempore est reiciendis. Dolor iti dicta optio ut at tempore est reiciendis. Dolor harum rerum, ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed mollitia! Nobis sit provident a laudantium reprehenderit non id quisquam odio explicabo consectetur sunt, doloremque eveniet nisi dolores rem esse recusandae corporis vel excepturi voluptas, itaque ab! Id doloribus deleniti maxime voluptate esse iure dolor aspernatur quibusdam impedit soluta optio corporis natus repellat cum quidem molestias possimus sapiente, nostrum delectus.",
      isFavourite: false,
      date: new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000),
      coverImg: potterImg,
      hackathonName: "potter ipsum",
      gitLink: "https://github.com/",
      otherLink: "https://www.google.com/",
      startDate: "2023-06-29",
      endDate: "2023-06-30",
    },
    {
      uniqueID: 105,
      title: "Figma Ipsum",
      summary:
        "Figma ipsum component variant main layer. Blur hand object thumbnail subtract flows font bold image. Font.",
      description:
        "soluta possimus quam delectus amet perferendis tempora ex neque consequuntur veritatis modi suscipit nemo? Quos, voluptas atque eum soluta quia repellat assumenda cum maxime cupiditate voluptatibus magni deleniti, distinctio dignissimos vitae illo reprehenderit sequi repellendus iusto odit labore molestias hic. Ratione sint in ullam incidunt esse ipsam velit vitae nemo commodi, molestias dicta! Totam maiores quas architecto deleniti dicta optio ut at tempore est reiciendis. Dolor harum rerum, ex saepe iuretibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed mollitia! Nobis sit provident a laudantium reprehenderit non id quisquam odio explicabo consectetur sunt, doloremque eveniet nisi dolores rem esse recusandae corporis vel excepturi voluptas, itaque ab! Id doloribus deleniti maxime voluptate esse iure dolor aspernatur quibusdam impedit soluta optio corporis natus repellat cum quidem molestias possimus sapiente, nostrum delectus.soluta possimus quam delectus amet perferendis tempora ex neque consequuntur veritatis modi suscipit nemo? Quos, voluptas atque eum soluta quia repellat assumenda cum maxime cupiditate voluptatibus magni deleniti, distinctio dignissimos vitae illo reprehenderit sequi repellendus iusto odit labore molestias hic. Ratione sint in ullam incidunt esse ipsam velit vitae nemo commodi, molestias dicta! Totam maiores quas architecto deleniti dicta optio ut at tempore est reiciendis. Dolor harum rerum, ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed mollitia! Nobis sit provident a laudantium reprehenderit non id quisquam odio explicabo consectetur sunt, doloremque eveniet nisi dolores rem esse recusandae corporis vel excepturi voluptas, itaque ab! Id doloribus deleniti maxime voluptate esse iure dolor aspernatur quibusdam impedit soluta optio corporis natus repellat cum quidem molestias possimus sapiente, nostrum delectus.",
      isFavourite: false,
      date: new Date(new Date().getTime() - 28 * 24 * 60 * 60 * 1000),
      coverImg: figmaIpsum,
      hackathonName: "figmaIpsum",
      gitLink: "https://github.com/",
      otherLink: "https://www.google.com/",
      startDate: "2023-05-03",
      endDate: "2023-05-06",
    },
    {
      uniqueID: 106,
      title: "Office Ipsum",
      summary: "Office ipsum you must be muted.",
      coverImg: office,
      description:
        "soluta possimus quam delectus amet perferendis tempora ex neque consequuntur veritatis modi suscipit nemo? Quos, voluptas atque eum soluta quia repellat assumenaccusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed mollitia! Nobis sit provident a laudantium reprehenderit non id quisquam odio explicabo consectetur sunt, doloremque eveniet nisi dolores rem esse recusandae corporis vel excepturi voluptas, itaque ab! Id doloribus deleniti maxime voluptate esse iure dolor aspernatur quibusdam impedit soluta optio corporis natus repellat cum quidem molestias possimus sapiente, nostrum delectus.soluta possimus quam delectus amet perferendis tempora ex neque consequuntur veritatis modi suscipit nemo? Quos, voluptas atque eum soluta quia repellat assumenda cum maxime cupiditate voluptatibus magni deleniti, distinctio dignissimos vitae illo reprehenderit sequi repellendus iusto odit labore molestias hic. Ratione sint in ullam incidunt esse ipsam velit vitae nemo commodi, molestias dicta! Totam maiores quas architecto deleniti dicta optio ut at tempore est reiciendis. Dolor harum rerum, ex saepe iure aliquid nobis perferendis, voluptatem tenetur id omnis minus accusantium ipsam quibusdam obcaecati incidunt, aut quaerat. Perferendis ipsa, sapiente deleniti vitae sint atque non inventore quisquam, harum repudiandae reprehenderit doloremque sit fugit dignissimos architecto labore? Voluptatem temporibus inventore nam corporis ipsum voluptatibus, officia reiciendis iusto quae, eos non. Commodi voluptas minima qui nostrum consequuntur similique sed mollitia! Nobis sit provident a laudantium reprehenderit non id quisquam odio explicabo consectetur sunt, doloremque eveniet nisi dolores rem esse recusandae corporis vel excepturi voluptas, itaque ab! Id doloribus deleniti maxime voluptate esse iure dolor aspernatur quibusdam impedit soluta optio corporis natus repellat cum quidem molestias possimus sapiente, nostrum delectus.",
      isFavourite: false,
      hackathonName: "OFFICE IPSUM",
      date: new Date(new Date().getTime() - 13 * 24 * 60 * 60 * 1000),
      gitLink: "https://github.com/",
      otherLink: "https://www.google.com/",
      startDate: "2023-09-23",
      endDate: "2023-09-28",
    },
  ]);
  // handle favourites to display only favourite cards
  const handleShowFavourite = (currentValue) => {
    setSearchTerm("");
    handleSearchBar("");
    if (currentValue === "all") {
      toggleShowFavourite(false);
      filterFavourites(false);
    } else {
      toggleShowFavourite(true);
      filterFavourites(true);
    }
  };
  const filterFavourites = (showFavourite) => {
    if (showFavourite) {
      const currentSub = filteredSubmissions.filter((singleSubmission) => {
        return singleSubmission.isFavourite === true;
      });
      setFilteredSubmissions(currentSub);
    } else {
      setFilteredSubmissions(allSubmissions);
    }
  };

  // filter submissions on the basis of title searched
  const handleSearchBar = (searchedValue) => {
    // when searched term = nothing, show all values
    setSearchTerm(searchedValue);
    if (searchedValue.length === 0) {
      filterFavourites(false);
      toggleShowFavourite(false);
      handleSorting(currentSorting, filteredSubmissions);
    }
  };
  // when title got seached show only submissions that include the title
  const titleGotSearched = (searchTerm) => {
    const currentSub = allSubmissions.filter((singleSubmission) => {
      return singleSubmission.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredSubmissions(currentSub);
  };

  // function to handle date-wise sorting
  const handleSorting = (currentSort, filteredSubmissions) => {
    setCurrentSorting(currentSort);
    let unSortedSubmissions = filteredSubmissions;
    // if selected option is newsest, show newest submissions first and vice versa
    if (currentSort === "newest") {
      unSortedSubmissions = unSortedSubmissions.sort((a, b) =>
        a.date < b.date ? 1 : -1
      );
    } else {
      unSortedSubmissions = unSortedSubmissions.sort((a, b) =>
        a.date > b.date ? 1 : -1
      );
    }
    setFilteredSubmissions(unSortedSubmissions);
  };

  useEffect(() => {
    if (filteredSubmissions.length % 3 === 0) {
      setCardAlignment("center");
    } else {
      setCardAlignment("left");
    }
  }, [filteredSubmissions]);

  useEffect(() => {
    let storedSubmissions = JSON.parse(
      localStorage.getItem("storedSubmissions")
    );
    // when user has input not any new submissions than all submissiosn= hardCoded submissions
    if (storedSubmissions == null) {
      localStorage.setItem(
        "storedSubmissions",
        JSON.stringify(hardCodedSubmissions)
      );
      storedSubmissions = hardCodedSubmissions;
    }
    setAllSubmissions(storedSubmissions);
    setFilteredSubmissions(storedSubmissions);
    handleSorting("newest", storedSubmissions);
  }, []);

  return (
    <div className="menu">
      <Toolbar className="menu-bar padding-container">
        <div className="menu-left-child">
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
        </div>

        <div className="menu-right-child">
          <div className="search-opt">
            <SearchIcon />
            <input
              className="search-input"
              type="text"
              value={searchTerm}
              placeholder="Search"
              onChange={(e) => {
                handleSearchBar(e.target.value);
                titleGotSearched(e.target.value);
              }}
            />
          </div>
          <div className="sorting-button-wrapper">
            <select
              className="sorting-button"
              onChange={(e) =>
                handleSorting(e.target.value, filteredSubmissions)
              }
              value={currentSorting}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </Toolbar>

      <div
        className={`cards-display ${
          cardAlignment === "center" ? "center-aligned" : "left-aligned"
        }`}
      >
        {/* map all the entries to the card and send respective props to it */}
        {filteredSubmissions.map((singleIdea) => {
          return (
            <TeamSubCard
              key={singleIdea.uniqueID}
              uniqueID={singleIdea.uniqueID}
              title={singleIdea.title}
              summary={singleIdea.summary}
              description={singleIdea.description}
              hackathonName={singleIdea.hackathonName}
              date={singleIdea.date}
              startDate={singleIdea.startDate}
              endDate={singleIdea.endDate}
              isFavourite={singleIdea.isFavourite}
              coverImg={singleIdea.coverImg}
              gitLink={singleIdea.gitLink}
              otherLink={singleIdea.otherLink}
              presentSubmissions={filteredSubmissions}
            />
          );
        })}
      </div>
    </div>
  );
}
