import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container, CheckoutButton } from "./style";

export default function Summary() {

  const appContext = useContext(AppContext);
  const { cart, getTotal, getTotalItems, formatCurrency } = appContext;
  return (
    <Container>
      <h2>resumo do pedido</h2>
      <hr />
      <span>
        <span>1 produto</span>
        <span>R$ 5.399,99</span>
      </span>
      <span>
        <span>frete</span>
        <span>R$ 0,00</span>
      </span>
      <hr />
      <span>
        <h3>Total: </h3>
        <h3>R$ 5.399,99</h3>
      </span>
      <CheckoutButton>
        <button>Finalizar Compra</button>
      </CheckoutButton>
    </Container>
  );
}
