const Node = ({
  node,
  children,
  handleExtend,
  handleExtendedCheck,
  handleTypeRadio,
}) => {
  let childnodes = null;

  if (children) {
    childnodes = children.map(function (childnode) {
      if (childnode.type === "radio") {
        console.log(childnode);
      }

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

  return (
    <li>
      <div
        onClick={() => {
          console.log("click");
          handleExtend(node.id);
        }}
      >
        <div className={node.type}></div>
        <span>{node.label}</span>
      </div>
      {childnodes && handleExtendedCheck(node.id) ? (
        <ul>{childnodes}</ul>
      ) : null}
    </li>
  );
};

export default Node;
