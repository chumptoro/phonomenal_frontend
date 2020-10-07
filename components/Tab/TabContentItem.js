import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Consumer } from "../Context";

import StyledOrderItemDetail from "../Styling/Form";

const StyledItem = styled.div`
  border: solid 1px ${props => props.theme.divider_gray};
  border-radius: 2.5px;
  margin: 0px;
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 129px;
  grid-column-gap: 20px;

  line-height: ${props => props.theme.line_height_between_paragraphs};
  /* .item_photo {
    float: right;
  } */

  cursor: pointer;
  
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
  z-index: 10;
  width: 100%;
  height: 100%; 

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
  width: 70vw;
  height: auto;
  border-radius: 5px;
  z-index: 100;

  
  display: grid;
  grid-row-gap: 0;
  grid-column-gap:0;

  .buttons_span {
    /* display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0px; */
  }
  
`;



const StyledHeroBanner = styled.div` 
    /* display: grid;
    grid-row-gap: 0px;
    grid-column-gap:0; */
   /*  display: block; */
    /* grid-column-start: 0; */
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


const StyledOrderItemDetailCreate = styled(StyledOrderItemDetail)`

`;

const StyledCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 25px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url('/icons/close_button.svg');
`;

const StyledButton = styled.div`
  width: auto;
  height: auto; 
  margin: auto;
  padding: 12px;
  background-color: ${props => props.theme.red} ;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: ${props => props.theme.font_size_title_mid};

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.red_selected} ;
  }
  
`;

const StyledAddItemButton = styled(StyledButton)`
  margin: auto;
  margin-bottom: ${props => props.theme.max_component_vertical_distance}; 
  display: ${props => (props.order_item_added ? 'none' : 'grid')};
  transition: all 0.25s;
`;

const StyledCheckOutButton = styled(StyledButton)`
  text-align: center;
  width: 150px;
  height: auto;
  margin: auto;
  margin-bottom: ${props => props.theme.max_component_vertical_distance}; 
  display: ${props => (props.order_item_added ? 'grid' : 'none')};
  transition: all 0.25s;
`;

const StyledAddMoreButton = styled(StyledCheckOutButton)`
`;


class TabContentItemThumbnail extends Component {
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
        <div><img src={item.image} alt="" width="128px" height="128px" />
        </div>
      </StyledItem>
    );
  }
}

class TabContentItemModal extends Component {
  state = { 
    order_item_added: false,
    order_item_not_yet_created: false,
    dish: this.props.item,
    quantity: 1,
    special_instruction: this.props.item.price
  }
  showItemAddingSuccessMessage = () => {
    this.setState({ order_item_added: true });
    
    console.log("running showItemAddingSuccessMessage.  state is " + this.state.order_item_added);
  }
  hideItemAddingSuccessMessage = () => {
    this.setState({ order_item_added: false });
    console.log("running hideItemAddingSuccessMessage.  state is " + this.state.order_item_added);
  }
  
  //if we  use this arrow property, there is no need to bind handleChange to the correct this,  it wil be handled
  handleTextInputChange = (e) => {
    //const val = type === 'number'? parseFloat(value) : value;
    //we can let the state change field dynanically by using a placeholder in side [ ] (see JS's computed property name)
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("order item field currently has value " + this.state[name]);
    console.log("changing ore item field value to " + e.target.value);
    //console.log (this.state.title);
  };

  render() {
    const { item, handleClose, show} = this.props;
    console.log(show);
    return (
        <StyledBlurLayer clicked={show}>
          <StyledModal>
              <StyledCloseButton onClick={handleClose}></StyledCloseButton>
              <StyledHeroBanner />

              <StyledOrderItemDetail order_item_added={this.state.order_item_added} >
                <div className="box">
                  <div className="title">
                    {item.name}
                  </div>
                    <input type="text" name="special_instruction" placeholder="  &#9999;  enter any special instructions" className="text_input_box" onChange={e => this.handleTextInputChange(e)} />
                </div>
                <div className="box">
                  <div className="title">
                    number of orders
                  </div>
                  <input type="number" name = "quantity" placeholder="1" className="number_input_box" onChange={e => this.handleTextInputChange(e)} />
                </div>
                <div className="box message"> &#10004; added to your shopping bag  <span>&#10024;</span> </div>
              </StyledOrderItemDetail>

              <StyledAddItemButton 
                order_item_added={this.state.order_item_added} 
                onClick={this.showItemAddingSuccessMessage}
              >
                add item
              </StyledAddItemButton>
              
              <div className="buttons_span">
                <StyledCheckOutButton 
                  order_item_added={this.state.order_item_added} 
                  onClick={handleClose}
                >
                  check out 
                </StyledCheckOutButton>
                <StyledAddMoreButton
                  order_item_added={this.state.order_item_added} 
                  onClick={handleClose}
                >
                  add more dishes
                </StyledAddMoreButton> 
              </div> 
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
  }
  hideModal = () => {
    this.setState({ show: false });
    console.log("running hideModal.  state of show is " + this.state.show);
  }
  render() {
    //const { onClick, props: {activeTab, label,}, } = this;
    const { item } = this.props;
    return (
      <div>
        <div onClick={this.showModal}>
          {/* <button type='button' onClick={this.showModal} >Open</button> */}
          <TabContentItemThumbnail item={item}/>
        </div>
          <TabContentItemModal item={item} show={this.state.show} handleClose={this.hideModal}/>
      </div>

    );
  }
}

export default TabContentItem;