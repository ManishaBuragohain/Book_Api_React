import React, { useState } from "react";
import bgImage from "../images/bg2.png";
import "./style.css";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (evNt) => {
    if ((evNt = "Enter")) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40`
        )

        .then((res) => setBookData(res.data.items))
        .catch((error) => console.log(error));
    }
  };

  const handleButton = () =>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
          A room without books is like a
            <br />
           <i>body without a soul</i>
          </h1>
        </div>

        <div className="row2">
          <h2>Find your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyDown={searchBook}
            />
            <button onClick={handleButton}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src={bgImage} alt="bgImage" className="bg" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
