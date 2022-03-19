const Node = ({ node, children, handleExtend, handleExtendedCheck }) => {
  let childnodes = null;
  if (children) {
    childnodes = children.map(function (childnode) {
      return (
        <Node
          node={childnode}
          children={childnode.child}
          key={childnode.id}
          handleExtend={handleExtend}
          handleExtendedCheck={handleExtendedCheck}
        />
      );
    });
  }
  const radioType = children.map((element) => {
    if (element.type === "radio") {
      return element.id;
    }
  });

  return (
    <li>
      <span onClick={() => handleExtend(node.id)}>
        <div className={node.type}></div>
        {node.label}
      </span>
      {childnodes && handleExtendedCheck(node.id) ? (
        <ul>{childnodes}</ul>
      ) : null}
    </li>
  );
};

export default Node;
