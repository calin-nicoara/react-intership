import {useEffect, useState} from "react";

export default function useFirstExample() {
  const [testState, setTestState] = useState("test");

  useEffect(() => {
    console.log("This is run one time!")
  }, [])

  return {
    testStateValue: testState
  }
}