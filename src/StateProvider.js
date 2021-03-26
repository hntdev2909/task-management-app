import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider
		value={useReducer(reducer, {}, () => {
			const localData = localStorage.getItem('listTasks');

			return localData ? JSON.parse(localData) : initialState;
		})}
	>
		{children}
	</StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
