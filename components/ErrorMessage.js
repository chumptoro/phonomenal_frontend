import styled from 'styled-components';
import React from 'react';

import PropTypes from 'prop-types';

const ErrorStylesWesBos = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const ErrorStyles = styled.div`
  p {
  }
  small {
    color: ${props => props.theme.red};
    opacity: 0.6;
  }
  margin: auto;
  margin-top: ${props => props.theme.upper_mid_component_vertical_distance};
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <small className='red'> Oh no! </small>
         <small>{error.message.replace('GraphQL error: ', '') }</small>
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <small> Oh no! </small>
        <small>{error.message.replace('GraphQL error: ', '') }</small>
      </p>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
