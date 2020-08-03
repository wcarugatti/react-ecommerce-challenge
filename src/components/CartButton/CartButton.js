import React, { useContext } from "react";
import { useHistory } from 'react-router';
import AppContext from "../../context/AppContext";
import { Container, CartIcon, Counter } from "./style";

export default function CartButton() {
  const appContext = useContext(AppContext);
  const { getTotalItems } = appContext;
  const history = useHistory();

  const handleCartClick = () =>{
    history.push("/resumo");
  }

  return (
    <Container onClick={handleCartClick}>
      <CartIcon />
      {getTotalItems() > 0 && <Counter>{getTotalItems()}</Counter>}
    </Container>
  );
}
