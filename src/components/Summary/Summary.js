import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import { Container, CheckoutButton, ModalContent } from "./style";

export default function Summary() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const appContext = useContext(AppContext);
  const { getTotal, getTotalItems, formatCurrency } = appContext;
  return (
    <Container>
      <h2>resumo do pedido</h2>
      <hr />
      <span>
        <span>
          {getTotalItems()} produto{getTotalItems() > 1 && "s"}
        </span>
        <span>{formatCurrency(getTotal())}</span>
      </span>
      <span>
        <span>frete</span>
        <span>R$ 0,00</span>
      </span>
      <hr />
      <span>
        <h3>Total: </h3>
        <h3>{formatCurrency(getTotal())}</h3>
      </span>
      <CheckoutButton>
        <button onClick={openModal}>Finalizar Compra</button>
        <CheckoutModal isOpen={modalIsOpen} closeModal={closeModal}>
          <ModalContent>
            <h2>Obrigado!</h2>
            <h2>Você ganhou de volta {formatCurrency(getTotal()*0.15) }</h2>
          </ModalContent>
        </CheckoutModal>
      </CheckoutButton>
    </Container>
  );
}
