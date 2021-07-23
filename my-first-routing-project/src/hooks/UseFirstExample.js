import {useEffect, useState} from "react";

export default function useFirstExample(validationFunction) {
  const [testState, setTestState] = useState("test");

  useEffect(() => {
    console.log("This is run one time!")
  }, [])

  function setTestStateOnlyIfValid(value) {
    if(validationFunction(value)) {
      setTestState(value);
    }
  }

  return {
    testStateValue: testState,
    setTestValue: setTestStateOnlyIfValid
  }
}