import Node from "./Node";
import { useState } from "react";
import list from "../list.json";

const Tree = () => {
  const [state, setState] = useState({
    data: list.data,
    extended: [],
    radio: [],
  });

  const handleTypeRadio = (arr) =>
    setState((prevState) => {
      return { ...prevState, radio: [...prevState.radio, arr] };
    });

  const handleExtend = (id, radionodes) => {
    // console.log(radionodes);
    radionodes &&
      radionodes.map((radio) => {
        // console.log("raz");
        handleExtend(radio);
      });
    if (radionodes) {
      radionodes.forEach((node) => {
        // console.log(node);
        let filtered = state.extended.filter((element) => {
          return node !== element;
        });
        setState((prevState) => {
          return { ...prevState, extended: filtered };
        });
      });
    }
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
  const handleExtendedCheck = (id) => {
    console.log(id);
    return state.extended.includes(id);
  };

  let nodes = state.data.map(function (listItem) {
    return (
      <Node
        node={listItem}
        children={listItem.child}
        key={listItem.id}
        handleExtend={handleExtend}
        handleExtendedCheck={handleExtendedCheck}
        handleTypeRadio={handleTypeRadio}
      />
    );
  });

  return <ul>{nodes}</ul>;
};

export default Tree;
