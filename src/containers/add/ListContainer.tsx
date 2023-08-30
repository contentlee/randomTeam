import { MemberComponent } from "@components/add";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { deleteMember } from "@reducers/memberSlice";

const ListContainer = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector((state) => state.members);

  const handleDeleteMemberOnClick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    dispatch(deleteMember(id));
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
