import React, { useState } from "react";

interface MembersInterface {
  members: string[];
  setMembers: (member: string[]) => void;
  resetMembers: () => void;
}

export const Members = React.createContext<MembersInterface>({
  members: [],
  setMembers: (member) => {},
  resetMembers: () => {},
});

interface TeamsInterface {
  teams: string[];
  setTeams: (team: string[]) => void;
  teamCount: number;
  setTeamCount: (count: number) => void;
  resetTeams: () => void;
}

export const Teams = React.createContext<TeamsInterface>({
  teams: [],
  setTeams: (team) => {},
  teamCount: 0,
  setTeamCount: (count) => {},
  resetTeams: () => {},
});

interface ResultsInterface {
  results: string[][];
  setResults: (result: string[][]) => void;
  resetResults: () => void;
  resetAll: () => void;
}

export const Results = React.createContext<ResultsInterface>({
  results: [],
  setResults: (result) => {},
  resetResults: () => {},
  resetAll: () => {},
});

const MainContext = ({ children }: React.PropsWithChildren) => {
  const [members, setMembers] = useState<string[]>([]);
  const [teams, setTeams] = useState<string[]>([]);
  const [teamCount, setTeamCount] = useState<number>(0);

  const changeMembers = (member: string[]) => setMembers(member);
  const changeTeams = (team: string[]) => setTeams(team);
  const changeTeamCount = (count: number) => setTeamCount(count);

  const [results, setResults] = useState<string[][]>([]);
  const changeResults = (result: string[][]) => setResults(result);

  const resetMembers = () => {
    setMembers([]);
  };
  const resetTeams = () => {
    setTeams([]);
  };

  const resetResults = () => {
    setResults([]);
  };

  const resetAll = () => {
    setMembers([]);
    setTeams([]);
    setTeamCount(0);
    setResults([]);
  };

  return (
    <Members.Provider value={{ members, setMembers: changeMembers, resetMembers }}>
      <Teams.Provider value={{ teams, setTeams: changeTeams, teamCount, setTeamCount: changeTeamCount, resetTeams }}>
        <Results.Provider value={{ results, setResults: changeResults, resetResults, resetAll }}>
          {children}
        </Results.Provider>
      </Teams.Provider>
    </Members.Provider>
  );
};

export default MainContext;
