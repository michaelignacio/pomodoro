import React from 'react';
import styled from 'styled-components';
import BreakControls from './BreakControls';
import SessionControls from './SessionControls';
import Wrapper from './Wrapper';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px;
	text-align: center;
`

const InfoBox = (props) => (
	<Wrapper>
		<Box>
			<p id="break-label">Break Length</p>
			<BreakControls
				length={props.breakLength}
				decreaseBreakLength={props.decreaseBreakLength}
				increaseBreakLength={props.increaseBreakLength}
			/>
		</Box>
		<Box>
			<p id="session-label">Session Length</p>
			<SessionControls
				length={props.sessionLength}
				decreaseSessionLength={props.decreaseSessionLength}
				increaseSessionLength={props.increaseSessionLength}
			/>
		</Box>
	</Wrapper>
);

export default InfoBox;
