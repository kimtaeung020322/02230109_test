import styled from "styled-components";
import { useTodoDispatch } from "../context/todos";

function ItemComponent({ todo }) {
  const dispatch = useTodoDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: todo.id });
  };

  const handleRemove = () => {
    if (window.confirm("삭제하시겠습니까?"))
      dispatch({ type: "REMOVE_TODO", id: todo.id });
  };

  return (
    <Container done={todo.done}>
      <p onClick={handleToggle}>{todo.text} </p>
      <BtnDelete onClick={handleRemove}>삭제</BtnDelete>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999;

  p {
    flex: 1;
    text-decoration: ${({ done }) => done && "line-through"};
  }
`;

const BtnDelete = styled.div``;

export default ItemComponent;
