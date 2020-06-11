import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  span {
    margin: 0 20px;
  }
`

const BreakControls = (props) => (
  <Wrapper>
    <span id="break-decrement" onClick={props.decreaseBreakLength}>down</span>
    <span id="break-length">{props.length}</span>
    <span id="break-increment" onClick={props.increaseBreakLength}>up</span>
  </Wrapper>
);

export default BreakControls;