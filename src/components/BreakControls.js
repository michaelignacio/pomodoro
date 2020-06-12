import React from 'react';
import Wrapper from './Wrapper';
import Clicker from './Clicker';

const BreakControls = (props) => (
  <Wrapper>
    <Clicker id="break-decrement" onClick={props.decreaseBreakLength}>down</Clicker>
    <span id="break-length">{props.length}</span>
    <Clicker id="break-increment" onClick={props.increaseBreakLength}>up</Clicker>
  </Wrapper>
);

export default BreakControls;
