import styled from 'styled-components';
import React, { Component } from "react";
import {css} from 'styled-components';

const PositionVerticallyHorizontallyCentered = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  /* width: 70vw;
  height: auto;
  border-radius: 5px;
  z-index: 100; 
  overflow-y: auto !important;
  */

`;

export default PositionVerticallyHorizontallyCentered;