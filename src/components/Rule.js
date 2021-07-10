import React, { memo } from "react";

function Rule(props) {
  console.log("rule comp rendered");
  const onMoveUp = (key) => {
    props.onMoveUp(key);
  };
  const onMoveDown = (key) => {
    props.onMoveDown(key);
  };
  const onClone = (id, key) => {
    props.onClone(id, key);
  };
  const onDelete = (id, key) => {
    props.onDelete(id, key);
  };
  return (
    <li key={props.keyValue}>
      <div className="ruleNo">{props.keyValue + 1} </div>
      <div className="ruleId">{props.rule.id} </div>
      <div className="ruleName">{props.rule.ruleName}</div>
      <div className="ruleArrows">
        <button className="btn btnUp" onClick={() => onMoveUp(props.keyValue)}>
          Up
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="btn btnDown"
          onClick={() => onMoveDown(props.keyValue)}
        >
          Down
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="btn btnClone"
          onClick={() => onClone(props.rule.id, props.keyValue)}
        >
          Clone
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="btn btnDelete"
          onClick={() => onDelete(props.rule.id, props.keyValue)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

function rulePropsAreEqual(prevRule, nextRule) {
  //   console.log(
  //     prevRule.rule.id === nextRule.rule.id &&
  //       prevRule.rule.ruleName === nextRule.rule.ruleName
  //   );
  return (
    prevRule.rule.id === nextRule.rule.id &&
    prevRule.rule.ruleName === nextRule.rule.ruleName
  );
}

export default React.memo(Rule, rulePropsAreEqual);
