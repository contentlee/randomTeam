import { useContext, useState } from "react";

import styled from "styled-components";

import { RadioComponent, UploadFileComponent } from "@components/add";
import { initialInput, intialInputArray } from "@utils/uploadFile";
import { LABEL } from "@helpers/constant";
import { Members, Results, Teams } from "@contexts/MainContext";

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

const UploadFileContainer = () => {
  const { members, setMembers } = useContext(Members);
  const { teams, setTeams } = useContext(Teams);
  const { results, setResults } = useContext(Results);

  const [mode, setMode] = useState<number>(0);

  const handleModeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.checked) {
      setMode(Number(e.target.id));
    }
  };

  const handleUploadOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    const reader = new FileReader();

    reader.onload = () => {
      const res = (reader.result as string).split("\n");

      if (mode !== 0 && res[1]?.includes("teams")) {
        const additionalTeams = initialInput(res[1]);
        if (additionalTeams.length >= 2 || additionalTeams[0] !== "") {
          setTeams([...teams, ...additionalTeams]);
        }
      }

      if (mode !== 1 && res[0]?.includes("members")) {
        const additionalMembers = initialInput(res[0]);
        if (additionalMembers.length >= 2 || additionalMembers[0] !== "")
          setMembers([...members, ...additionalMembers]);
      }

      if (mode === 3 && res[2]?.includes("results")) {
        const additionalResults = intialInputArray(res[2]);
        if (String(results) !== String(additionalResults)) {
          setResults([...results, ...additionalResults]);
        }
      }

      console.log(results);
    };
    reader.onerror = () => {
      alert("문제가 생겼어요!");
    };

    if (files) reader.readAsText(files[0]);

    e.target.files = null;
    e.target.value = "";
  };

  return (
    <RadioContainer>
      <RadioWrapper>
        {LABEL.map((label, i) => {
          return (
            <RadioComponent
              key={i}
              mode={mode}
              props={{ name: "upload", label: label, value: i, fn: handleModeOnChange }}
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
