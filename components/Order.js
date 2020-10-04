import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";


import { Provider } from "./Context";
// export { Provider, Consumer };


const StyledOrder = styled.div`
  /* grid-column-start:2; */
  /* grid-column-end:3; */
`;

class Order extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Array).isRequired,
  // }
  state = {
      activeTab: this.props.children[0].props.label,

      show: false,

      delivery_method: "pickup",
      total_price: "0",
      progress_status: "shopping bag is populated",
      payment_status: false,

      first_name: "",
  	  last_name: "",
  	  email: "",
  	  phone_number: "",
  	  delivery_address: "",
      payment_card_number: "",
  };

   
  showModal = () => {
      this.setState({ show: true });
  }
  hideModal = () => {
      this.setState({ show: false });
  }

  //if we  use this arrow property, there is no need to bind handleChange to the correct this,  it wil be handled
  handleTextInputChange = (e) => {
    //const val = type === 'number'? parseFloat(value) : value;
    //we can let the state change field dynanically by using a placeholder in side [ ] (see JS's computed property name)

    const { value, name } = e.target;
    this.setState({ [name]: value });
    console.log("state is currently " + this.state[name]);
    console.log("togglin state to value " + e.target.value);
    //console.log (this.state.title);
  };

  handleRadioButton = (e) => {
    console.log("state is currently " + this.state.delivery_method);
    console.log("togglin state to value " + e.target.value);
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          handleTextInputChange: e => this.handleTextInputChange(e),
          handleRadioButton: e => this.handleRadioButton(e),
          showModal: this.showModal,
          hideModal: this.hideModal
        }}
      >
        {this.props.children}
        
      </Provider>
    );
  }
}
export default Order;