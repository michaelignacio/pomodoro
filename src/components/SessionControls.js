import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  span {
    margin: 0 20px;
  }
`

const SessionControls = () => (
  <Wrapper>
    <span id="session-decrement">up</span>
    <span>value</span>
    <span id="session-increment">down</span>
  </Wrapper>
);

export default SessionControls;