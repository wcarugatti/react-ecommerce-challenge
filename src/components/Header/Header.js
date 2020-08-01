import React from 'react'
import {Container} from './style'
import SearchBar from './../SearchBar/SearchBar';
import Brand from './../Brand/Brand';
import CartIcon from '../CartIcon/CartIcon';

export default function Header() {
  return (
    <Container>
      <Brand/>
      <SearchBar/>
      <CartIcon/>
    </Container>
  )
}
