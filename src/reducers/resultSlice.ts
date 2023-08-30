import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "results",
  initialState: [] as string[][],
  reducers: {
    setResults: (_, { payload: results }) => {
      return results;
    },
    resetResults: () => {
      return [];
    },
  },
});

export const { setResults, resetResults } = resultSlice.actions;
export default resultSlice.reducer;
