import React, { Component } from "react";
import styled from 'styled-components';
import {css} from 'styled-components';

const InputTextCSS = css`
  font-family: "europa";
  border-radius: 3px  ;
  border: 0.5px solid ${props => props.theme.divider_gray} ;
  outline: none;
`;

const InputTextBorderlessCSS = css`
  border:none;
`;

const InputText = styled('input')` 
  ${InputTextCSS};
`;

const InputTextBorderless = styled('input')` 
  ${InputTextCSS};
  ${InputTextBorderlessCSS};
`;

export {InputText, InputTextCSS, InputTextBorderlessCSS, InputTextBorderless}; 