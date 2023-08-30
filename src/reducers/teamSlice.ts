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
      const tmp = state;
      tmp.list = [...tmp.list, team];
      return tmp;
    },
    addTeams: (state, { payload: teams }) => {
      const tmp = state;
      tmp.list = [...tmp.list, ...teams];
      return tmp;
    },
    deleteTeam: (state, { payload: id }) => {
      const tmp = state;
      tmp.list.splice(id, 1);
      return tmp;
    },
    changeTeamCount: (state, { payload: cnt }) => {
      const tmp = state;
      tmp.count = cnt;
      return tmp;
    },
    resetTeamCount: (state) => {
      const tmp = state;
      tmp.count = 0;
      return tmp;
    },
    resetTeamAll: () => ({ list: [], count: 0 }),
  },
});

export const { addTeam, addTeams, deleteTeam, changeTeamCount, resetTeamCount, resetTeamAll } = teamSlice.actions;
export default teamSlice.reducer;
