import React from "react";

import { TeamComponent } from "@components/config";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { deleteTeam } from "@reducers/teamSlice";

const ListContainer = () => {
  const teams = useAppSelector((state) => state.teams.list);
  const dispatch = useAppDispatch();

  const handleDeleteTeamOnClick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    dispatch(deleteTeam(id));
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
