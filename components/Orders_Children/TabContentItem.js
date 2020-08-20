import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const StyledItem = styled.div`
  border: solid 1px ${props => props.theme.divider_gray};
  border-radius: 2.5px;
  margin: 0px;
  padding: 20px;
  
`;

class TabContentItem extends Component {
    static propTypes = {
      // activeTab: PropTypes.string.isRequired,
      // label: PropTypes.string.isRequired,
      // onClick: PropTypes.func.isRequired,
    }
    onClick = () => {
      // const { label, onClick } = this.props;
      // onClick(label);
    }
    render() {
      //const { onClick, props: {activeTab, label,}, } = this;
    
      const { item, category } = this.props;

      return (
        <StyledItem>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>{category}</div>

        </StyledItem>
      );
    }
}

export default TabContentItem;