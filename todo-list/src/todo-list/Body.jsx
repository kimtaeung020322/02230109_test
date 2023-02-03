import styled from "styled-components";
import { useTodoState } from "../context/todos";
import ItemComponent from "./ItemComponent";

function Body() {
  const todos = useTodoState();

  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <ItemComponent key={todo.id} todo={todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

export default Body;
