import {useEffect, useState} from "react";

export default function DemoForMemo(props) {
  const [state1, setState1] =  useState("1");
  const [state2, setState2] =  useState("2");

  useEffect(() => {
    console.log("Demo for memo initialized");
  });

  function onChangeStateValuesHandler() {
    setState1("New 1");
    setState2("New 2");
  }

  return (
    <div>
      <div>
        This is demo for memo!
        This is my message: {props.propEx}
      </div>
      <button onClick={onChangeStateValuesHandler}>Change DEMO state from inside</button>

    </div>
  )
}