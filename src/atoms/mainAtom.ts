import { atom } from "recoil";

export interface Team {
  members: string[];
  teams: string[];
  teamCount: number;
  results: string[][];
}

export const membersState = atom<Team["members"]>({
  key: "membersState",
  default: [],
});

export const teamsState = atom<Team["teams"]>({
  key: "teamsState",
  default: [],
});

export const teamCountState = atom<Team["teamCount"]>({
  key: "teamCountState",
  default: 0,
});

export const resultsState = atom<Team["results"]>({
  key: "resultsState",
  default: [],
});
