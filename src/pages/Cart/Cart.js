import React, { Component } from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import { Container, ProductTable, Total } from "./styles.js";
export default class Cart extends Component {
  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th></th>
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://45582.cdn.simplo7.net/static/45582/sku/adidas-tenis-adidas-kanadia-tr7-1591017425972.jpg"
                  alt="tenis"
                />
              </td>
              <td>
                <strong>Tênis exemplo teste</strong>
                <span>R$120.90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={1} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$120.90</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">finalizar pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$1902,00</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
