import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container } from "./style";
import { Link } from "react-router-dom";


export default function Brand() {
  const appContext = useContext(AppContext);
  const { clearSearch } = appContext;
  return (
    <Container>
        <Link to="/" onClick={clearSearch}>GrassStore</Link>
    </Container>
  );
}
