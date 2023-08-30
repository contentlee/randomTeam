import { ResultComponent } from "@components/result";

import { useAppSelector } from "@store/hooks";

const ListContainer = () => {
  const {
    teams: { list: teams },
    results,
  } = useAppSelector((state) => state);

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
