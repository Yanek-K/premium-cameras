import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import Button from "./../Forms/Button";
import Item from "./Item";

import "./styles.scss";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const Checkout = () => {
  const { cartItems, total } = useSelector(mapState);
  const history = useHistory();

  const errMsg = "Your cart is currently empty.";

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <table
                  className="checkoutHeader"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>quantity</th>
                      <th>price</th>
                      <th>remove</th>
                    </tr>
                  </tbody>
                </table>
              </tr>

              <tr>
                <table border="0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    {cartItems.map((item, pos) => {
                      return (
                        <tr key={pos}>
                          <td>
                            <Item {...item} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </tr>

              <tr>
                <table
                  align="right"
                  border="0"
                  cellSpacing="0"
                  cellPadding="10"
                >
                  <tr align="right">
                    <td>
                      <h3>Total: ${total}</h3>
                    </td>
                  </tr>

                  <tr>
                    <table border="0" cellSpacing="0" cellPadding="10">
                      <tbody>
                        <tr>
                          <td>
                            <Button onClick={() => history.goBack()}>
                              Continue Shopping
                            </Button>
                          </td>
                          <td>
                            <Button onClick={() => history.push("/payment")}>
                              Checkout
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </tr>
                </table>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="empty">{errMsg}</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
