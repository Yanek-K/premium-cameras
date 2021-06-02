import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

//Redux
import { getOrderDetailsStart } from "./../../redux/Orders/orders.actions";

//Components
import OrderDetails from "./../../components/OrderDetails";

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails,
});

const Order = () => {
  const { orderID } = useParams();
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
  }, [dispatch, orderID]);

  return (
    <div>
      <h1>Order ID: #{orderID}</h1>
      <OrderDetails order={orderDetails} />
      <h2>Total: ${orderTotal}</h2>
    </div>
  );
};

export default Order;
