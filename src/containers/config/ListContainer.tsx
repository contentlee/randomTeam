import React from "react";
import { useRecoilState } from "recoil";

import { TeamComponent } from "@components/config";

import { teamsState } from "@atoms/mainAtom";

const ListContainer = () => {
  const [teams, setTeams] = useRecoilState(teamsState);

  const handleDeleteTeamOnClick = (e: React.MouseEvent, id: number) => {
    const temp = [...teams];
    temp.splice(id, 1);
    setTeams(temp);
  };

  return (
    <div>
      {teams.length ? (
        teams.map((team, i) => {
          return <TeamComponent key={i} props={{ id: i, name: team, delete_fn: handleDeleteTeamOnClick }} />;
        })
      ) : (
        <span>팀명을 추가하지 않을시, 인덱스가 팀명으로 입력됩니다.</span>
      )}
    </div>
  );
};

export default ListContainer;
