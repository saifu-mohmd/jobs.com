import React from "react";
import "./Search.css";
import { Container } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <Container fluid className="body d-none d-lg-block">
      <div className="searchDiv">
        <form action="">
          <div className="firstDiv shadow-sm p-3">
            <div className="d-flex gap-2 align-items-center">
              <AiOutlineSearch className="icon" />
              <input
                type="text"
                className="searchInput bg-transparent  
        w-100% outline-none"
                placeholder="Search Job Here..."
              />
              <AiOutlineCloseCircle className=" closeIcon" />
            </div>

            <div className="d-flex gap-2 align-items-center">
              <BsHouseDoor className="icon" />
              <input
                type="text"
                className="searchInput bg-transparent  
        w-100% outline-none"
                placeholder="Search By Company"
              />
              <AiOutlineCloseCircle className=" closeIcon" />
            </div>

            <div className="d-flex gap-2 align-items-center">
              <CiLocationOn className="icon" />
              <input
                type="text"
                className="searchInput bg-transparent  
        w-100% outline-none"
                placeholder="Search Location Here..."
              />
              <AiOutlineCloseCircle className=" closeIcon" />
            </div>

            <button className="searchButton py-2 px-4 cursor-pointer text-white">
              Search
            </button>
          </div>
        </form>

        <div className="secDiv d-flex align-items-center gap-5 mt-3 justify-content-center">
          <div className="singleSearch d-flex gap-2 align-items-center">
            <label htmlFor="relevance" className=" font-semibold ">
              Sort by:
            </label>
            <select
              name=""
              id="relevance"
              className=" px-3 py-1 relevance shadow-sm"
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Start with</option>
              <option value="">Contains</option>
            </select>
          </div>

          <div className="singleSearch d-flex gap-2 align-items-center">
            <label htmlFor="type" className=" font-semibold ">
              Type:
            </label>
            <select
              name=""
              id="type"
              className=" px-3 py-1 relevance shadow-sm"
            >
              <option value="">Full-Time</option>
              <option value="">Part-Time</option>
              <option value="">Remote</option>
              <option value="">Contract</option>
            </select>
          </div>

          <div className="singleSearch d-flex gap-2 align-items-center">
            <label htmlFor="level" className=" font-semibold ">
              Level:
            </label>
            <select
              name=""
              id="level"
              className=" px-3 py-1 relevance shadow-sm"
            >
              <option value="">Senior</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Expert</option>
            </select>
          </div>
          <span className="clearAll px-3 py-1">Clear All</span>
        </div>
      </div>
    </Container>
  );
};

export default Search;
