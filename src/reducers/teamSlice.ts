import { createSlice } from "@reduxjs/toolkit";

export interface Teams {
  list: string[];
  count: number;
}

const initialState: Teams = {
  list: [],
  count: 0,
};

export const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeam: (state, { payload: team }) => {
      state.list.push(team);
    },
    addTeams: (state, { payload: teams }) => {
      teams.forEach((team: string) => state.list.push(team));
    },
    deleteTeam: (state, { payload: id }) => {
      state.list.splice(id, 1);
    },
    changeTeamCount: (state, { payload: cnt }) => {
      state.count = cnt;
      return state;
    },
    resetTeamCount: (state) => {
      state.count = 0;
      return state;
    },
    resetTeamAll: () => ({ list: [], count: 0 }),
  },
});

export const { addTeam, addTeams, deleteTeam, changeTeamCount, resetTeamCount, resetTeamAll } = teamSlice.actions;
export default teamSlice.reducer;
