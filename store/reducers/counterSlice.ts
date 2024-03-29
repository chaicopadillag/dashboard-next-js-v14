import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CounterStateType = {
    count: number,
    isReady: boolean;
}

const initialState: CounterStateType = {
    count: 0,
    isReady: false
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        initialCounter: (state, action: PayloadAction<number>) => {
            if (state.isReady) return;

            return { isReady: true, count: action.payload }

        },
        incrementCount: (state) => {
            return { ...state, count: state.count + 1 }
        },
        sustractCount: (state) => {
            if (state.count === 0) return state;
            return { ...state, count: state.count - 1 }
        },
        resetCount: (state, action: PayloadAction<number>) => {
            return { ...state, count: action.payload }
        }
    }
});

export const { sustractCount, incrementCount, resetCount, initialCounter } = counterSlice.actions

export default counterSlice.reducer