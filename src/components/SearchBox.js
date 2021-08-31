import React from "react";
import styled from "styled-components";

const SearchBoxInput = styled.input`
  background-color: inherit;
  color: rgb(255,193,7);
  border-color: rgb(255,193,7);
`;

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4 mx-auto mt-4">
      <SearchBoxInput
        className="form-control"
        placeholder="Type to search..."
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
