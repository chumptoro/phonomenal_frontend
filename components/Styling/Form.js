import React, { Component } from "react";
import styled from 'styled-components';


const StyledOrderItemDetail = styled.div` 
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  /* margin-bottom: 30px; */

  .box {
    margin: ${props => props.theme.max_component_vertical_distance};
    margin-top: ${props => props.theme.min_component_vertical_distance};
  }
  .title {
    font-size: ${props => props.theme.font_size_title_small};
    font-weight: bold;
  }
  .message {
    margin: 0;
    margin-left: ${props => props.theme.max_component_vertical_distance};
    color: ${props => (props.order_item_added ? props.theme.green : 'white')};
    font-size: ${props => props.theme.font_size_title_small};
    grid-column-start: 1;

    span {
      font-size: ${props => props.theme.emoji_size_mid};
      opacity: ${props => (props.order_item_added ? '1' : '0')};
    }
  }
  input[type="text"]
	{
    font-family: "europa";
		border-radius: 3px  ;
    border: 0.5px solid ${props => props.theme.divider_gray} ;
	outline: none;
    width: 70%;
    height: 30px;
    margin-top: 10px;
	}
  input[type="number"]
	{
    font-family: "europa";
		border-radius: 3px  ;
    border: 0.5px solid ${props => props.theme.divider_gray} ;
		outline: none;
    width: 30px;
    height: 30px;
    margin-top: 10px;
	}
  input::placeholder {
    color: ${props => props.theme.content_gray} ;
    text-align: center;
  }
`;


export default StyledOrderItemDetail;