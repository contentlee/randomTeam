import { useRecoilValue } from "recoil";

import { ResultComponent } from "@components/result";
import { teamsState, resultsState } from "@atoms/mainAtom";

const ListContainer = () => {
  const teams = useRecoilValue(teamsState);
  const results = useRecoilValue(resultsState);

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
