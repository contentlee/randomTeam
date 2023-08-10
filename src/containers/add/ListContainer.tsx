import { useContext } from "react";

import { MemberComponent } from "@components/add";
import { Members } from "@contexts/MainContext";

const ListContainer = () => {
  const { members, setMembers } = useContext(Members);

  const handleDeleteMemberOnClick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    const temp = [...members];
    temp.splice(id, 1);
    setMembers(temp);
  };

  return (
    <div>
      {members.length ? (
        members.map((member, i) => {
          return <MemberComponent key={i} props={{ id: i, name: member, delete_fn: handleDeleteMemberOnClick }} />;
        })
      ) : (
        <div>추가된 멤버가 없습니다.</div>
      )}
    </div>
  );
};

export default ListContainer;
