import React, { useState } from 'react';
import styled from 'styled-components';
import InfoBox from './components/InfoBox';
import TimerLabel from './components/TimerLabel';
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
  const [sessionLength, setSessionLength] = useState(25);
  const [runningSession, setRunningSession] = useState(25);

  return (
    <Container>
      <InfoBox
        breakLength={breakLength}
        // implement running/not running yet conditional here
        increaseBreakLength={() => setBreakLength(breakLength + 1)}
        decreaseBreakLength={() => setBreakLength(breakLength - 1)}
        sessionLength={sessionLength}
        increaseSessionLength={() => setSessionLength(sessionLength + 1)}
        decreaseSessionLength={() => setSessionLength(sessionLength - 1)}
        />
      <TimerLabel duration={sessionLength} />
      <Controls
        handleReset={() => setRunningSession(sessionLength)}
      />
    </Container>
  );
}

export default App;
