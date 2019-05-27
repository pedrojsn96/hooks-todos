import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';

const initState = {
	count: 0
};

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {
				count: state.count + 1
			};
		case 'decrement':
			return {
				count: state.count - 1
			};
		case 'reset':
			return initState;
		default:
			return initState;
	}
}

export default function App() {
	const value = useContext(UserContext);
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<div>
			Count: {state.count}
			<button
				className="border p-1"
				onClick={() => dispatch({ type: 'increment' })}
			>
				{'Increment'}
			</button>
			<button
				className="border p-1"
				onClick={() => dispatch({ type: 'decrement' })}
			>
				{'Decrement'}
			</button>
			<button
				className="border p-1"
				onClick={() => dispatch({ type: 'reset' })}
			>
				{'Reset'}
			</button>
		</div>
	);
}
