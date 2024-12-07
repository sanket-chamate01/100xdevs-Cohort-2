import { atomFamily } from "recoil";
import { TODOS } from "./Todos";

// you can put todo in atom also but then if one todo changes then all will re-render but in atomFamily, only the changed todo re-renders

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});