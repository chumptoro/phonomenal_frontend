import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import OrderCategory from './Orders_Children/OrderCategory';

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

  //if we  use this arrow property, there is no need to bind handleChange to the correct this,  it wil be handled
  handleTextInputChange = (e) => {
    const { field, value } = e.target;
    //const val = type === 'number'? parseFloat(value) : value;
    //we can let the state change field dynanically by using a placeholder in side [ ] (see JS's computed property name)
    this.setState({[field]:value});
    //console.log (this.state.title);
  };

  handleRadioButton = (e) => {
    //const { name, value } = e.target;
    // if(e.target.checked) {
    //   console.log("state field current has value " + this.state.delivery_method);
    //   console.log("switch button has value " + e.target.value);
    //   this.setState({delivery_method: e.target.value});
    // }
    // else {
    //   e.target.checked == true;
    //   console.log("field delivery_method now has value " + this.state.delivery_method);
    // }
  

    console.log("state is currently " + this.state.delivery_method);
    console.log("togglin state to value " + e.target.id);
    this.setState({ delivery_method: e.target.id });
    
    
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          handleTextInputChange: e => this.handleTextInputChange(e),
          handleRadioButton: e => this.handleRadioButton(e)
            
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export default Order;