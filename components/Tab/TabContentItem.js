import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Consumer } from "../Context";

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

const StyledModal = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  width: 80vw;
  height: 70vh;
  
  border-radius: 3px;
`;

const StyledBlurLayer= styled.div`
  /* position: absolute;
  top: 100px; 
  filter: blur(0px) !important; */
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
  //onClick = () => {
    // const { label, onClick } = this.props;
    // onClick(label);
  //}
  render() {
    const { item, handleClose, show} = this.props;
    console.log(show);
    return (
        <StyledBlurLayer clicked={show}>
          <StyledModal>
            <button onClick={handleClose}>
            </button>
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