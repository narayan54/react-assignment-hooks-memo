import React, { useState, useEffect } from "react";
import Rule from "./Rule";

function Rules() {
  console.log("rules comp rendered");
  const [rules, setRules] = useState([]);
  useEffect(() => {
    fetch(
      "http://jivoxdevuploads.s3.amazonaws.com/eam-dev/files/44939/Rule%20JSON.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRules(result.data);
        },
        (error) => {}
      );
  }, []);
  const onMoveUp = (key) => {
    if (key === 0) return;
    //const { rules } = rules;
    const index = key - 1;
    const itemAbove = rules[index];
    rules[key - 1] = rules[key];
    rules[key] = itemAbove;
    setRules([...rules]);
  };
  //Movedown handler to move the item to down
  const onMoveDown = (key) => {
    //const { rules } = rules;
    if (key === rules.length - 1) return;
    const index = key + 1;
    const itemBelow = rules[index];
    rules[key + 1] = rules[key];
    rules[key] = itemBelow;
    setRules([...rules]);
  };
  //Clone handler to copy the rule
  const onClone = (id, key) => {
    //const { rules } = rules;

    //find the id
    const selectedRule = rules.find((rule) => rule.id === id);

    //for clone use JSON for deep copy
    const clonedRule = JSON.parse(JSON.stringify(selectedRule));
    rules[++key] = clonedRule;
    setRules([...rules]);
  };

  //Delete handler to delete rule
  const onDelete = (id, key) => {
    //const { rules } = rules;
    setRules([...rules.filter((rule) => rule.id !== id)]);
  };

  return (
    <ul>
      <li key={Math.random()}>
        <div className="ruleNo">
          <strong>
            <i>Serial No.</i>
          </strong>
        </div>
        <div className="ruleId">
          <strong>
            <i>Rule Id</i>
          </strong>
        </div>
        <div className="ruleName">
          <strong>
            <i>Rule Name</i>
          </strong>
        </div>
        <div></div>
      </li>
      {rules.map((rule, key) => (
        <Rule
          rule={rule}
          keyValue={key}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onClone={onClone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default Rules;
