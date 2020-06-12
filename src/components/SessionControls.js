import React from 'react';
import Wrapper from './Wrapper';
import Clicker from './Clicker';

const SessionControls = (props) => (
  <Wrapper>
    <Clicker id="session-decrement" onClick={props.decreaseSessionLength}>down</Clicker>
    <span id="session-length">{props.length}</span>
    <Clicker id="session-increment" onClick={props.increaseSessionLength}>up</Clicker>
  </Wrapper>
);

export default SessionControls;
