import React, { useState } from 'react';
import styled from 'styled-components';
import InfoBox from './components/InfoBox';
import Timer from './components/Timer';
import Controls from './components/Controls';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(5);

  return (
    <Container>
      <InfoBox
        increaseBreakLength={() => setBreakLength(breakLength + 1)}
        decreaseBreakLength={() => setBreakLength(breakLength - 1)}
        length={breakLength}
        />
      <Timer />
      <Controls />
    </Container>
  );
}

export default App;
