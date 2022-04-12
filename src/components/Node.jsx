const Node = ({ node, children, handleExtend, handleExtendedCheck }) => {
  let childnodes = null;
  let radio = [];
  if (children) {
    childnodes = children.map(function (childnode) {
      if (childnode.radio) {
        radio = [...radio, childnode.id];
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
      <div onClick={() => handleExtend(node, radio)}>
        <div className="tree">
          {node.child && (
            <div className={node.radio ? "radio" : "checkbox"}></div>
          )}
        </div>
        <div>{node.label}</div>
      </div>
      {childnodes && handleExtendedCheck(node.id) ? (
        <ul>{childnodes}</ul>
      ) : null}
    </li>
  );
};

export default Node;
