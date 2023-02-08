import { useContext, useState } from "react";
import styled from "styled-components";
import { RadioComponent, UploadFileComponent } from "../../components";
import { Members, Results, Teams } from "../../contexts/MainContext";

const RadioContainer = styled.div`
p {
  margin : 0 5px;
  color: #c4c4c4;
  font-size: 12px;
  font-weight: 100;
  &:hover {
    color: gray;
  }`;

const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  }
`;

const Label = ["팀원만 추가", "팀명만 추가", "팀원과 팀명 추가", "결과 값까지 모두 설정"];

const UploadFileContainer = () => {
  const { members, setMembers } = useContext(Members);
  const { teams, setTeams } = useContext(Teams);
  const { results, setResults } = useContext(Results);

  const [mode, setMode] = useState("0");

  const handleModeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    if (e.target.checked) setMode(e.target.id);
  };

  const handleUploadOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const temp = result.split("\r\n");
      if (mode !== "1" && temp[0]?.includes("members")) {
        const tempArray = temp[0].split(":");
        const additionalMembers = tempArray[1].split(",");
        setMembers([...members, ...additionalMembers]);
      }
      if (mode !== "0" && temp[1]?.includes("teams")) {
        const tempArray = temp[1].split(":");
        const additionalTeams = tempArray[1].split(",");
        setTeams([...teams, ...additionalTeams]);
      }

      if (mode === "3" && temp[2]?.includes("results")) {
        const tempArray = temp[2].split(":");
        const additionalResults = tempArray[1].split("],[").map((value, i) => {
          let tempString = value;
          if (i === 0) tempString = tempString.replace("[", "");
          if (value[value.length - 1] === "]") tempString = tempString.replace("]", "");
          const tempArray = tempString.split(",");
          return tempArray;
        });
        setResults([...results, ...additionalResults]);
      }
    };
    reader.onerror = () => {
      alert("문제가 생겼어요!");
    };
    if (files) await reader.readAsText(files[0]);

    e.target.files = null;
    e.target.value = "";
  };

  return (
    <RadioContainer>
      <RadioWrapper>
        {Label.map((label, i) => {
          return (
            <RadioComponent
              key={i}
              props={{ mode: mode, name: "upload", label: label, value: String(i), fn: handleModeOnChange }}
            />
          );
        })}
      </RadioWrapper>
      <UploadFileComponent props={{ fn: handleUploadOnChange }} />
      <p>※ 데이터가 없을 경우 추가되지 않습니다.</p>
    </RadioContainer>
  );
};

export default UploadFileContainer;
