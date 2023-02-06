import { useContext } from "react";
import { TeamComponent } from "../../components";
import { Teams } from "../../contexts/MainContext";

const ListContainer = () => {
  const { teams, setTeams } = useContext(Teams);

  const handleDeleteTeamOnClick = (id: number) => {
    let temp = [...teams];
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
