import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import { Link as InternalLink } from 'react-scroll';
import PropTypes from 'prop-types';

import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import {StyledNoSetNumberOfRowItemsResponsiveGrid} from "../components/Styling/Responsive_Grids";

const Shopping_Bag = props => (
    <StyledNoSetNumberOfRowItemsResponsiveGrid>
        <div>
            Hi
        </div>
        <div>
            Bro
        </div>
    </StyledNoSetNumberOfRowItemsResponsiveGrid>
);
export default Shopping_Bag;