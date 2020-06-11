import React from 'react';
import styled from 'styled-components';
import BreakControls from './BreakControls';
import SessionControls from './SessionControls';

const Wrapper = styled.div`
	display: flex;
`

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
			{console.log(props)}
			<BreakControls
				length={props.length}
				decreaseBreakLength={props.decreaseBreakLength}
				increaseBreakLength={props.increaseBreakLength}
			/>
		</Box>
		<Box>
			<p id="session-label">Session Length</p>
			<SessionControls />
		</Box>
	</Wrapper>
);

export default InfoBox;
