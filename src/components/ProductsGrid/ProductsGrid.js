import React, { useContext } from "react";
import { Container } from "./style";
import spinner from "../../assets/spinner.gif";
import Product from "../Product/Product";
import AppContext from "../../context/AppContext";

const getPokes = (page,pokes) =>{
  let pagePokes = [];
  let pokesPerPage = 12;
  let totalPages = Math.ceil(pokes.length / pokesPerPage);
  let pokesThisPage = page === totalPages ? pokes.length % pokesPerPage : pokesPerPage;
  for (let i = 0; i < pokesThisPage;i++){
      pagePokes.push(pokes[((page-1)*pokesPerPage + i)])
  }
  return pagePokes;
}

export default function ProductsGrid() {
  const appContext = useContext(AppContext);
  const {page, pokes, loading } = appContext;

  if (loading) {
    return (
      <>
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </>
    );
  }

  return (
    <Container>
      {getPokes(page, pokes).map((props) => (
        <Product key={props.id} {...props} />
      ))}
    </Container>
  );
}
