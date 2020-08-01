import React, { useState, useEffect } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import usePersistedState from './usePersistedState.js'

const AppState = (props) => {
  const [cart, setCart] = usePersistedState("grassStore",[]);
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pokesPerPage, setPokesPerPage] = useState(18);

  const apiUrl = "https://pokeapi.co/api/v2";

  const getPrice = (id) => {
    return ((id % 5) + 1) * 80;
  };

  const formatPrice = (id) => {
    return getPrice(id).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const formatCurrency = (price) =>{
      return price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
  }

  const getQuantity = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        return cart[i].quantity;
      }
    }
    return 0;
  };

  const getName = (id) => {
    for (let i = 0; i < pokes.length; i++) {
      if (pokes[i].id === id) {
        return pokes[i].name;
      }
    }
    return undefined;
  };

  const cartAdd = (id) => {
    let hasProduct = false;
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          hasProduct = true;
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }, hasProduct)
    );
    if (!hasProduct) {
      setCart([
        ...cart,
        { id, name: getName(id), price: getPrice(id), quantity: 1 },
      ]);
    }
  };

  const cartSub = (id) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity !== 0)
    );
  };

  const cartRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = (format) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  };

  const getTotalItems = () =>{
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }
    return count;
  }

  const pokeUrl = (name) => {
    return `${apiUrl}/pokemon/${name}`;
  };

  const pokeListUrl = () => {
    return `${apiUrl}/type/grass`;
  };

  const processPokes = (pokemon) => {
    let pokes = [];
    for (let i = 0; i < pokemon.length; i++) {
      let urlSplit = pokemon[i].pokemon.url.split("/");
      pokes.push({
        id: urlSplit[urlSplit.length - 2],
        name: pokemon[i].pokemon.name,
      });
    }
    return pokes;
  };

  useEffect(() => {
    const fetchPokes = async () => {
      setLoading(true);
      const {
        data: { pokemon },
      } = await axios.get(pokeListUrl());

      setPokes(processPokes(pokemon));
      setLoading(false);
    };

    fetchPokes();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        pokes,
        setPokes,
        loading,
        setLoading,
        page,
        setPage,
        pokesPerPage,
        setPokesPerPage,
        pokeListUrl,
        pokeUrl,
        getPrice,
        formatPrice,
        cartAdd,
        cartSub,
        cartRemove,
        getQuantity,
        getTotal,
        getTotalItems,
        formatCurrency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
