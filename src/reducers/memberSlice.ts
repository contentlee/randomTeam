import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "members",
  initialState: [] as string[],
  reducers: {
    addMember: (state, { payload: member }) => {
      state.push(member);
    },
    addMembers: (state, { payload: members }) => {
      state = members;
    },
    deleteMember: (state, { payload: id }) => {
      state.splice(id, 1);
    },
    resetMember: () => {
      return [];
    },
  },
});

export const { addMember, addMembers, deleteMember, resetMember } = memberSlice.actions;
export default memberSlice.reducer;
