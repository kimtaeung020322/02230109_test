import { useRef, useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../context/todos";

function Input() {
  const [text, setText] = useState("");
  const nextId = useRef(4);
  const inputRef = useRef();

  const dispatch = useTodoDispatch();

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("할 일을 입력해주세요");
      return;
    }
    dispatch({ type: "CREATE_TODO", id: nextId.current++, text });
    setText("");
    inputRef.current.focus();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Inputs
          placeholder="할 일을 입력해주세요"
          onChange={handleText}
          value={text}
          ref={inputRef}
        />
        <Button>등록</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  border-top: 1px solid #bbb;
`;

const Inputs = styled.input`
  width: 100%;
  padding: 5px;
  border: none;

  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 4px;
  border: none;
  background-color: #999;
  color: #fff;

  &:hover {
    background-color: red;
    cursor: pointer;
  }

  &:active {
    background-color: #999;
  }
`;

export default Input;
