import React from 'react';
import { SpinnerParent, SpinnerChild } from './Spinner.styles';

function Spinner() {
	return (
		<SpinnerParent>
			<SpinnerChild></SpinnerChild>
			<SpinnerChild></SpinnerChild>
			<SpinnerChild></SpinnerChild>
		</SpinnerParent>
	);
}

export default Spinner;
