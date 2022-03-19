import Node from "./Node";
import { useState } from "react";
import list from "../list.json";

const Tree = () => {
  const [state, setState] = useState({
    data: list.data,
    extended: [],
  });

  const handleExtendedCheck = (id) => {
    return state.extended.includes(id);
  };

  const handleExtend = (id) => {
    if (state.extended.includes(id)) {
      let filtered = state.extended.filter((element) => {
        return element !== id;
      });
      setState((prevState) => {
        return { ...prevState, extended: filtered };
      });
    } else {
      setState((prevState) => {
        return { ...prevState, extended: [...prevState.extended, id] };
      });
    }
  };

  let nodes = state.data.map(function (listItem) {
    return (
      <Node
        node={listItem}
        children={listItem.child}
        key={listItem.id}
        handleExtend={handleExtend}
        handleExtendedCheck={handleExtendedCheck}
      />
    );
  });

  return (
    <div>
      <ul>{nodes}</ul>
    </div>
  );
};

export default Tree;
