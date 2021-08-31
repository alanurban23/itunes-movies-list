import React from "react";
import styled from "styled-components";

const PaginationStyled = styled.nav`
  justify-content: center;
`;

const PaginationButton = styled.button`
  background-color: inherit;
  color: rgb(255,193,7);
  border-color: rgb(255,193,7);
`;

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationStyled className="pagination mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <PaginationButton
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </PaginationButton>
          </li>
        ))}
      </PaginationStyled>
    </nav>
  );
};

export default Pagination;
