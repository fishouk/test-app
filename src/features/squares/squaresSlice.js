import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { generateRandomColor } from '../../utils/generateRandomColor';

export const squaresSlice = createSlice({
    name: 'squares',
    initialState: { items: [] },
    reducers: {
        addFirstSquare: (state) => {
            state.items = [{ id: uuidv4(), color: `#${generateRandomColor()}` }, ...state.items];
        },
        deleteLastSquare: (state) => {
            state.items = state?.items?.slice(0, -1);
        },
    },
});

export const { addFirstSquare, deleteLastSquare } = squaresSlice.actions;

export default squaresSlice.reducer;
