import Link from 'next/link';
import styled from 'styled-components';
import PositionVerticallyHorizontallyCentered from "./Styling/VerticallyHorizontallyCentered";
import StyledOrderItemDetail from "./Styling/Form";
import {ResponsiveGridHideFooter} from "./Styling/Responsive_Grids";

import React, { Component } from "react";
import { Provider } from "./Context";
import { Mutation, Query } from 'react-apollo';

const SignupGrid = styled(StyledOrderItemDetail)`
	display: grid;
  grid-row-gap: 0;
  grid-column-gap:0;

	${PositionVerticallyHorizontallyCentered}
`;

class Signup extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Array).isRequired,
  // }
  state = {
    
  };
  componentDidMount() {
		// if (localStorage.getItem("delivery_address") !== null ) {
		// 	this.setState({
		// 		delivery_address: localStorage.getItem("delivery_address")
		// 	});
		// }
		// else {
		// 	this.setState({
		// 		delivery_address: ""
		// 	});
		// }
	}
	componentWillUnmount() {
		//localStorage.setItem("delivery_address", this.state.delivery_address);
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
      // <Provider
      //   value={{
      //     state: this.state,
      //     handleTextInputChange: e => this.handleTextInputChange(e),
      //     handleRadioButton: e => this.handleRadioButton(e),
      //     updateTotalPrice: this.updateTotalPrice,
      //   }}
      // >
      //   {this.props.children}
			// </Provider>
			
			<StyledOrderItemDetail>
				<div className="input_wrapper">
					<div className="label">
					{this.props.parent_props.dish.name}
					</div>
					<input 
						type="text" name="special_instruction" 
						placeholder="  &#9999;  enter requests or instructions"
						value={this.state.special_instruction} 
						className="text_input_box" 
						onChange={this.handleChange} />
				</div>
			</StyledOrderItemDetail>
    );
  }
}
export default Signup;

