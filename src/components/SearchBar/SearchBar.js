import React, { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container, SearchButton } from "./style";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const appContext = useContext(AppContext);
  const { handleSearch } = appContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          placeholder="busque aqui seu produto"
        />
      </form>
      <SearchButton onClick={handleSubmit} />
    </Container>
  );
}
