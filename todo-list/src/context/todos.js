import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(null);
export const DispatchContext = createContext(null);

const initialState = [
  { id: 1, text: "투두리스트 기초알아보기", done: true },
  { id: 2, text: "투두리스트 스타일링하기", done: false },
  { id: 3, text: "투두리스트 만들기", done: false },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, text: action.text, done: false });

    case "TOGGLE_TODO":
      return state.map((todo) =>
        action.id === todo.id ? { ...todo, done: !todo.done } : todo
      );

    case "REMOVE_TODO":
      return state.filter((todo) => action.id !== todo.id);

    default:
      return state;
  }
}

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
export function useTodoState() {
  const context = useContext(StateContext);

  if (!context) throw Error("Provider 없음");

  return context;
}

export function useTodoDispatch() {
  const context = useContext(DispatchContext);

  if (!context) throw Error("Provider 없음");

  return context;
}
