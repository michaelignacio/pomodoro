import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const Wrapper = styled.div`
  text-align: center;
`

const TimerLabel = (props) => (
  <Wrapper>
    <p id="timer-label">Session</p>
    <div id="time-left"><Timer duration={props.duration} /></div>
  </Wrapper>
);

export default TimerLabel;
