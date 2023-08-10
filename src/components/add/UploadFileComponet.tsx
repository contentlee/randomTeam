import styled from "styled-components";

interface Props {
  props: {
    fn?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  width: -webkit-fill-available;
  height: 40px;

  background-color: #fff;

  border: 1px dashed #c4c4c4;
  border-radius: 10px;

  color: #c4c4c4;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: gray;
    cursor: pointer;
    box-shadow: 0 0 5px gray;
    filter: grayscale(40%);
  }

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
  }
`;

const UploadFileComponent = ({ props: { fn = () => {} } }: Props) => {
  return (
    <InputWrapper>
      <input type="file" name="upload" id="upload" accept=".txt" onChange={fn} />
      <label htmlFor="upload">
        <span>업로드</span>
      </label>
    </InputWrapper>
  );
};

export default UploadFileComponent;
