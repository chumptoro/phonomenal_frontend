import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import PropTypes from 'prop-types';

//* reference: https://www.digitalocean.com/community/tutorials/react-tabs-component

// class RadioButtonSet extends Component {
//     state = {
//         selectedButton: this.props.children[0].props.label,
//     }
//     handleClick = (button) => {
//         this.setState({selectedButton:button});
//     }
//     render() {
//         const { handleClick, props: {children,}, state: {selectedButton,} } = this;
    
//         return (
//           <div className="tabs">
//             <ol className="tab-list">
//               {children.map((child) => {
//                 const { label } = child.props;
    
//                 return (
//                   <Tab
//                     selectedButton={selectedButton}
//                     key={label}
//                     label={label}
//                     onClick={handleClick}
//                   />
//                 );
//               })}
//             </ol>
//             <div className="tab-content">
//               {children.map((child) => {
//                 if (child.props.label !== selectedButton) return undefined;
//                 return child.props.children;
//               })}
//             </div>
//           </div>
//         );
//       }
// }

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = 'tab-list-item';
  
      if (activeTab === label) {
        className += ' tab-list-active';
      }
  
      return (
        <li
          className={className}
          onClick={onClick}
        >
          {label}
        </li>
      );
    }
  }

class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
    state = {
        activeTab: this.props.children[0].props.label,
    }
    handleClick = (button) => {
        this.setState({activeTab:button});
    }  
    // constructor(props) {
    //   super(props);
  
    //   this.state = {
    //     activeTab: this.props.children[0].props.label,
    //   };
    // }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }
  
    render() {
      const {
        onClickTabItem,
        props: {
          children,
        },
        state: {
          activeTab,
        }
      } = this;
  
      return (
        <div className="tabs">
          <ol className="tab-list">
            {children.map((child) => {
              const { label } = child.props;
  
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ol>
          <div className="tab-content">
            {children.map((child) => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;
            })}
          </div>
        </div>
      );
    }
  }
  
  export default Tabs;