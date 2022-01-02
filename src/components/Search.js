import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div>
      {searchTerm ?
        <div>
          <h2>{searchTerm} Images</h2>
          <Container searchTerm={searchTerm} />
        </div>
      : <></>
      }
    </div>
  );
};

export default Search;
