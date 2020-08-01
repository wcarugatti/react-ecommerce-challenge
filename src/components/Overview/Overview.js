import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container, GrayBox, Wrapper, CartTable, Title } from "./style";
import OverviewProduct from "./../OverviewProduct/OverviewProduct";
import Summary from "../Summary/Summary";

export default function Overview() {
  const appContext = useContext(AppContext);
  const { cart } = appContext;

  return (
    <Container>
      <GrayBox>
        <Title>Meu Carrinho</Title>
        <Wrapper>
          <CartTable>
            <thead>
              <th>Quantidade</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Remover?</th>
            </thead>
              <tbody>
                {cart.map((item) => (
                  <OverviewProduct key={item.id} {...item} />
                ))}
              </tbody>
          </CartTable>
          <Summary />
        </Wrapper>
      </GrayBox>
    </Container>
  );
}
