import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { Container, Cart } from "./styles";
import logo from "../../assets/logo.svg";
export default class Header extends Component {
  render() {
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>3 items</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container>
    );
  }
}
