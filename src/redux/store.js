import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from './features/activities'

export default configureStore({
    reducer: {
        activities: activitiesReducer
    }
}) 