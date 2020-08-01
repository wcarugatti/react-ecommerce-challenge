import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Container,
  SelectButtons,
  AddButton,
  SubButton,
  Caption,
  ProductName,
  Quantity,
  Price,
} from "./style";



export default function Product({ id, name }) {
  let capitalizedName = name[0].toUpperCase() + name.slice(1);

  const appContext = useContext(AppContext);
  const { formatPrice, getQuantity, cartAdd, cartSub } = appContext;

  return (
    <Container>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
      />
      <Caption>
        <ProductName>{capitalizedName}</ProductName>
        <Price>{formatPrice(id)}</Price>
        <SelectButtons>
          <span>
            <AddButton onClick={()=>cartAdd(id)}>+</AddButton>
            <SubButton onClick={()=>cartSub(id)}>-</SubButton>
          </span>
          <Quantity>{getQuantity(id)}</Quantity>
        </SelectButtons>
      </Caption>
    </Container>
  );
}
