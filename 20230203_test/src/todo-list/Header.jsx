import styled from "styled-components";
import { useTodoState } from "../context/todos";

function Header() {
  const todos = useTodoState();

  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  const doneCount = todos.filter((todo) => todo.done).length;

  return (
    <Container>
      <DateText>{dateStr}</DateText>
      <CountText>
        완료: {doneCount}/{todos.length}
      </CountText>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #999;
`;
const DateText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-style: 500;
`;

const CountText = styled.p`
  font-size: 1rem;
  color: black;
`;

export default Header;
