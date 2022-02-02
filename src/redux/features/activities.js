import { createSlice } from '@reduxjs/toolkit'

const activitiesSlice = createSlice({
    name: 'activities',
    initialState: [],
    reducers: {
        addAct: (state, action) => {
            const newItem = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newItem)
        },
        completeAct: (state, action) => {
            const index = state.findIndex((item) => 
                item.id === action.payload.id)

            state[index].completed = action.payload.completed;
        },
        updateAct: (state, action) => {
            const index = state.findIndex((item) => 
                item.id === action.payload.id)

            state[index].title = action.payload.title
        },
        removeAct: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
    },
})

export const { addAct, removeAct, completeAct, updateAct } = activitiesSlice.actions;

export default activitiesSlice.reducer;