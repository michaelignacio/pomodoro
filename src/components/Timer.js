import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`

const Timer = (props) => (
  <Wrapper>
    <p id="timer-label">Session</p>
    <p id="time-left">{props.data}</p>
  </Wrapper>
);

export default Timer;
