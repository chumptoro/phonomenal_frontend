import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import { Consumer } from "../Context";

class TabContentItemModal extends Component {
    onClick = () => {
      // const { label, onClick } = this.props;
      // onClick(label);
    }
    render() {
      const { item } = this.props;
  
      return (
          <div></div>
      );
    }
  }