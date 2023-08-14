import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "src/reducers/memberSlice";
import resultSlice from "src/reducers/resultSlice";
import teamSlice from "src/reducers/teamSlice";

export const store = configureStore({
  reducer: {
    members: memberSlice,
    teams: teamSlice,
    results: resultSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
