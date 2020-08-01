import React from "react";
import { Container } from "./style";
import Pagination from "./../Pagination/Pagination";
import ProductsGrid from "../ProductsGrid/ProductsGrid";



export default function Catalog() {

  return (
    <Container>
      <ProductsGrid/>
      <Pagination />
    </Container>
  );
}
