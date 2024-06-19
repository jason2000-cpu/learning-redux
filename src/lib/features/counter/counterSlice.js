import { createAppSlice } from '@/lib/createAppSlice';
import { createSlice } from '@reduxjs/toolkit';


const initialState =  {
    value: 0,
    status: "idle"
}

const loadState = () =>{
    try {
        const serializedState = localStorage.getItem('counterState')
        if (serializedState === null){
            return initialState;
        }

        return JSON.parse(serializedState)
    } catch(err){
        return initialState
    }
}
export const counterSlice = createAppSlice({
    name: "counter",
    initialState: loadState(),
    reducers: (create)  => ({
        increment: create.reducer((state) => {
            state.value += 1;
        }),
        decrement: create.reducer((state) => {
            state.value -= 1;
        }),
        incrementByAmount : create.reducer((state, action) => {
            state.value -= action.payload;
        })
    }),
    selectors : {
        selectCount: (counter) => counter.value,
        selectStatus: (counter) => counter.status,
      }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { selectCount } = counterSlice.selectors;
export default counterSlice.reducer;
