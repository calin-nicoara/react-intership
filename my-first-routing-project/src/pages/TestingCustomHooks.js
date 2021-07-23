import useFirstExample from "../hooks/UseFirstExample";

export default function TestingCustomHooks() {
  const firstExample = useFirstExample((value) => value.length > 20);

  console.log("RUNNING CUSTOM HOOKS");

  function setTestValue() {
    firstExample.setTestValue("aaaaaa bbbbbb ccccc dddd eeeeeee");
  }

  return <div>
    Hello there! {firstExample.testStateValue}
    <button onClick={setTestValue}>Set test value</button>
  </div>
}