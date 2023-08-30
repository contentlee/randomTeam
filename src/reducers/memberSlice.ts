import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "members",
  initialState: [] as string[],
  reducers: {
    addMember: (state, { payload: member }) => {
      return [...state, member];
    },
    addMembers: (_, { payload: members }) => {
      return members;
    },
    deleteMember: (state, { payload: id }) => {
      const tmp = [...state];
      tmp.splice(id, 1);
      return tmp;
    },
    resetMember: () => {
      return [];
    },
  },
});

export const { addMember, addMembers, deleteMember, resetMember } = memberSlice.actions;
export default memberSlice.reducer;
