import { WrapperComponent } from "@components/common";
import { InputContainer, ListContainer, ResetContainer, SubmitContainer, UploadFileContainer } from "@containers/add";
import { MainContainer } from "@containers/common";
import { useEffect, useState } from "react";

const AddMembersPage = () => {
  const [scroll, setScroll] = useState<number>();
  const handleScroll = () => {
    console.log(window.scrollY);
    setScroll(window.scrollY);
  };
  useEffect(() => {
    console.log(scroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <MainContainer>
      <WrapperComponent>
        <header>
          <h2>파일 업로드</h2>
        </header>
        <UploadFileContainer />
      </WrapperComponent>
      <WrapperComponent>
        <h2>팀원추가</h2>
        <InputContainer />
      </WrapperComponent>
      <hr />
      <WrapperComponent>
        <header>
          <h2>추가된 팀원</h2>
          <ResetContainer />
        </header>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </MainContainer>
  );
};

export default AddMembersPage;
