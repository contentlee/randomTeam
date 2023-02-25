import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent, ResultComponent } from "../../components";
import { Results, Teams } from "../../contexts/MainContext";

const ListContainer = () => {
  const { teams } = useContext(Teams);
  const { results, resetAll } = useContext(Results);

  return (
    <div>
      {results.length ? (
        results.map((result, i) => {
          return <ResultComponent key={i} props={{ id: i, name: teams[i], member: result }} />;
        })
      ) : (
        <span>결과가 존재하지 않습니다.</span>
      )}
    </div>
  );
};

export default ListContainer;
