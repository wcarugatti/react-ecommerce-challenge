import React from "react";
import { Container, SearchButton } from "./style";

const handleSubmit = e =>{
    e.preventDefault();
    alert("teste")
}

export default function SearchBar() {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="busque aqui seu produto" />
      </form>
      <SearchButton onClick={()=> alert("teste2")}/>
    </Container>
  );
}
