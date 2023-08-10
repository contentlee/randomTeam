import { useContext } from "react";

import { ResultComponent } from "@components/result";
import { Results, Teams } from "@contexts/MainContext";

const ListContainer = () => {
  const { teams } = useContext(Teams);
  const { results } = useContext(Results);

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
