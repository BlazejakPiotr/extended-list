import Node from "./Node";

const Tree = ({ data }) => {
  let nodes = data.map(function (listItem) {
    return <Node node={listItem} children={listItem.child} key={listItem.id} />;
  });

  return (
    <div>
      <ul>{nodes}</ul>
    </div>
  );
};

export default Tree;
