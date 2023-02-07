import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent, ResultComponent } from "../../components";
import { Results, Teams } from "../../contexts/MainContext";

const ListContainer = () => {
  const navigate = useNavigate();

  const { teams } = useContext(Teams);
  const { results, resetAll } = useContext(Results);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetAll();
    navigate("/");
  };

  return (
    <div>
      <ButtonComponent
        props={{ name: "전체 초기화", fn: handleResetOnClick }}
        style={{ width: " -webkit-fill-available", backgroundColor: "red" }}
      />
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
