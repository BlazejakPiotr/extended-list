const Node = ({ node, children }) => {
  let childnodes = null;
  if (children) {
    childnodes = children.map(function (childnode) {
      return (
        <Node node={childnode} children={childnode.child} key={childnode.id} />
      );
    });
  }

  return (
    <li>
      {node.type && (
        <span>
          <input type={node.type} />
        </span>
      )}
      {node.label}
      {childnodes ? <ul>{childnodes}</ul> : null}
    </li>
  );
};

export default Node;
