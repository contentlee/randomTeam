import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "results",
  initialState: [] as string[][],
  reducers: {
    setResults: (state, { payload: results }) => {
      results.forEach((res: string[]) => state.push(res));
    },
    resetResults: () => {
      return [];
    },
  },
});

export const { setResults, resetResults } = resultSlice.actions;
export default resultSlice.reducer;
