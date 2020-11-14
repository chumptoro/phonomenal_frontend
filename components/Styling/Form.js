import React, { Component } from "react";
import styled from 'styled-components';
import {css} from 'styled-components';

const StyledInputFormMargin = css`
  margin-top: 15%;
`; 

const StyledInputForm = styled.div` 
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  /* margin-bottom: 30px; */

  .form_title {
    margin: auto;
    margin-top: ${props => props.theme.min_component_vertical_distance};
    font-size: ${props => props.theme.font_size_title_mid};
  }

    /* wrapping the label and the input field */
  .input_wrapper {
    margin: ${props => props.theme.max_component_vertical_distance};
    margin-top: ${props => props.theme.min_component_vertical_distance};
    @media only screen 
    and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
    and (max-device-width : ${props => props.theme.screen_width_iphoneX_max})
    {
      margin-bottom: 0;
    }
    /* iPhone 6, 7, 8 */
    @media only screen 
    and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
    and (max-device-width : ${props => props.theme.screen_width_iphone678_max})
    {
      margin-bottom: 0;
    }

  }
  .label {
    font-size: ${props => props.theme.font_size_title_small};
    font-weight: bold;
  }
  .message {
    margin: 0;
    margin-left: ${props => props.theme.max_component_vertical_distance};
    color: ${props => (props.order_item_created ? props.theme.green : props.theme.green)};
    opacity: ${props => ((props.order_item_created && props.order_item_update_first_time_shown) ? 1 : 0)};
    font-size: ${props => props.theme.font_size_title_small};
    grid-column-start: 1;

    span {
      font-size: ${props => props.theme.emoji_size_mid};
      opacity: ${props => (props.order_item_created ? '1' : '0')};
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
  input[type="password"]
	{
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

const FormMiniInline = styled('div')`
  border: 1px solid ${props => props.theme.ui_actionable_green} ;
  /* border: 0.5px solid ${props => props.theme.divider_gray}; */  
  border-radius: 3px;
  grid-column-start: 2;
  width: 80%;
  margin-bottom: 20px; 
  color: ${props => props.theme.content_gray};

  input[type="text"] {
    width: 58%;
    height: 25px;
  }
  .non_submit_button {
    border-radius: 20%;
    height: 25px;
    width: 20px;
    font-size: 15px;
    /* display:inline-block; */ /* to control height and width.  inline does not have width or height */
    margin-left: 6px;
    margin-right: 6px;
  }
  .submit_button {
    margin: -1px;
    float:right; 
    border-radius: 0px 3px 3px 0px;
    height: 20px;
    padding: 5px;
    /* display:inline-block; */
  }
`;


export {StyledInputFormMargin, StyledInputForm};