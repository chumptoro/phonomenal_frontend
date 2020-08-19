import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import OrderCategory from './Orders_Children/OrderCategory';


const StyledOrder = styled.div`
  grid-column-start:2;
  /* grid-column-end:3; */
`;

const Order = () => (
    <StyledOrder>
        <OrderCategory/>
    </StyledOrder>
);
export default Order;