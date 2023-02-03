import styled from "styled-components";
import { Provider } from "../context/todos";
import Body from "./Body";
import Header from "./Header";
import Input from "./Input";

function Todos() {
  return (
    <Provider>
      <Container>
        <Header />
        <Body />
        <Input />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  border: 1px solid #eee;

  background-color: #fff;
`;

export default Todos;
