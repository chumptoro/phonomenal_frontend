import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Consumer } from "../Context";

import CreateOrderItem from "../CRUDs/OrderItem/CreateOrderItem"
import QueryOrderItem from "../CRUDs/OrderItem/QueryOrderItem"

import {StyledButton, ButtonRow} from "../Styling/Button"

// give last child a border bottom when there is only 1 dish thumbnail displayed per line
const StyledTabContentItem = styled.div`
    @media only screen and (max-width: ${props => props.theme.dish_thumbnail_screensize_where_one_dish_takes_up_entire_row}) {
      :last-child {
        border: solid 1px ${props => props.theme.divider_gray};
      }
    }
`;

const StyledItem = styled.div`
  border: solid 1px ${props => props.theme.divider_gray};
  border-radius: 2.5px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  grid-column-gap: 20px;
  line-height: ${props => props.theme.line_height_between_paragraphs};
  cursor: pointer;
  /* take out borders and left/right paddings when there is only 1 dish thumbnail displayed per line */
  @media only screen and (max-width: ${props => props.theme.dish_thumbnail_screensize_where_one_dish_takes_up_entire_row}) {
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-radius:0px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const DishName = styled.div`
  font-weight: ${props => props.theme.font_weight_normal};
  font-size: ${props => props.theme.font_size_title_small};
  
`;
const DishDescription = styled.div`
  /* font-weight: ${props => props.theme.font_weight_light}; */
  line-height: ${props => props.theme.line_height_content};
  color:${props => props.theme.content_gray};
`;
const Price = styled.div`
  /* font-weight: ${props => props.theme.font_weight_bold}; */
  color:${props => props.theme.green};
`;
const DishImage = styled.div`
  padding-top: 16px;
  img {
    border-radius: 1px;
  }
`;
const PriceCompare = styled.small`
  /* text-decoration: line-through; */
  color: black;
`;

const StyledBlurLayer= styled.div`
  /* filter: blur(0px) !important; */
  display: ${props => (props.clicked ? 'block' : 'none')};
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%; 
  @media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphoneX_max})
	{
    
	}
	/* iPhone 6, 7, 8 */
	@media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphone678_max})
  {
    
  }
  /* opacity: 0.2; */
 	background-color: rgba(0,0,0,0.5);
   
`;

//centered vertically and horizontally: https://www.w3schools.com/howto/howto_css_center-vertical.asp
const StyledModal = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  /* width: 70vw;
  height: auto; */
  @media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphoneX_max})
	{
    /* width: 100vw; */
   /*  top: 0;
    left: 0; */
   
	}
	/* iPhone 6, 7, 8 */
	@media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphone678_max})
  {
    /* width: 100vw; */
  /*   top: 0;
    left: 0; */
    
  }
  border-radius: 5px;
  z-index: 1;

  overflow-y: auto !important;

  display: grid;
  grid-row-gap: 0;
  grid-column-gap:0;

`;

const StyledHeroBanner = styled.div` 
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 10vw 10vw 10vw 10vw;
    background-image: url('/vietfoodpnoramic.jpeg');
    /* (https://res.cloudinary.com/druhu3xb6/image/upload/q_auto:low,f_auto/v1592479764/Junzi/Banner/junzi_kitchen_banner.png); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px 4px 0px 0px;
`;

class TabContentItemThumbnail extends Component {
  state ={
    order_item_created: false
  }
  highlightThumbnailBorder = () => {
    this.setState({ order_item_created: true });
    //console.log(" state of order_item created is " + this.state.order_item_created);
  }
  render() {
    //const { onClick, props: {activeTab, label,}, } = this;
    const { item } = this.props;
    return (
      <StyledItem>
        <div>
          <DishName>{item.name}</DishName>
          <DishDescription>{item.description}</DishDescription>
          <Price>
            ${item.price} <PriceCompare> </PriceCompare>
          </Price>
        </div>
        <DishImage><img src={item.image} alt="" width="128px" height="128px" />
        </DishImage>
      </StyledItem>
    );
  }
}

class TabContentItemModal extends Component {
  state = { 
    order_item_created: false,
    order_item_update_first_time_shown: true,
    dish: this.props.item,
    quantity: 1,
    special_instruction: this.props.item.price
  }
  itemCreationSuccessMessageCanBeShown = () => {
    this.setState({ order_item_created: true });
  }
  hideItemCreationSuccessMessage = () => {
    this.setState({ order_item_update_first_time_shown: false });
  }
  itemDeletionResetState = () => {
    this.setState({ order_item_created: false });
    this.setState({ order_item_update_first_time_shown: true });
  }
  handleTextInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("order item field currently has value " + this.state[name]);
    console.log("changing item field value to " + e.target.value);
  };
  render() {
    const { item, hideModal, show} = this.props;
    let form;
    if (this.state.order_item_created == false) {
      console.log("order_item does not exist. directing user to <CreateOrderItem>");
      /* console.log("false"); */
      form =              
        <CreateOrderItem 
          dish={item} 
          order_item_created={this.state.order_item_created} 
          onCreated={this.itemCreationSuccessMessageCanBeShown}
          hideModal={this.props.hideModal}
          /> ;
    } 
    else {
      console.log("order item exists.  directing user to QueryOrderItem");
      form =               
              <QueryOrderItem 
                dish={item} 
                order_item_created={this.state.order_item_created} order_item_update_first_time_shown={this.state.order_item_update_first_time_shown} 
                onSubmission={this.hideItemCreationSuccessMessage}
                onReset={this.itemDeletionResetState}  
                hideModal={this.props.hideModal}
                onClose={this.itemCreationSuccessMessageCanBeShown}
              /> ;
    }
    return (
        <StyledBlurLayer clicked={show}>
          <StyledModal>
              {/* <StyledCloseButton onClick={hideModal}></StyledCloseButton> */}
              {/* <StyledHeroBanner/> */}
              {form}
          </StyledModal>
        </StyledBlurLayer>
    );
  }
}

class TabContentItem extends Component {
  state = { show: false }
  showModal = () => {
    this.setState({ show: true });
    /* document.body.style.filter = "blur(20px)"; */  
   /*  document.body.style.overflowY = "hidden"; */
  }
  hideModal = async () => { 
    this.setState({ show: false });
    document.body.style.overflowY = "scroll";
  }
  render() {
    let modal;
    if (this.state.show) {
      modal= <TabContentItemModal item={item} show={this.state.show} hideModal={this.hideModal}/>
    }
    const { item } = this.props;
    return (
      <>
        <StyledTabContentItem onClick={this.showModal}>
          {/* <button type='button' onClick={this.showModal} >Open</button> */}
          <TabContentItemThumbnail item={item} />
        </StyledTabContentItem>
        <TabContentItemModal item={item} show={this.state.show} hideModal={this.hideModal}/>
      </>
    );
  }
}
export default TabContentItem;