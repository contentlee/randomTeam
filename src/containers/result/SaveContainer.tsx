import { useContext } from "react";

import { ButtonComponent } from "@components/common";
import { Members, Results, Teams } from "@contexts/MainContext";

const SaveContainer = () => {
  const { members } = useContext(Members);
  const { teams } = useContext(Teams);
  const { results } = useContext(Results);

  const handleSaveOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.createElement("a");
    const text = `members:${members}
teams:${teams}
results:${results.map((result) => `[${result}]`)}
    `;
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", "팀만들기.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <ButtonComponent
      props={{ name: "결과저장", fn: handleSaveOnClick }}
      style={{ width: "-webkit-fill-available", backgroundColor: "purple" }}
    />
  );
};

export default SaveContainer;
