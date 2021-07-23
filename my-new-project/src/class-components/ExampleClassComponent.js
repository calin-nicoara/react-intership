import {Component} from "react";

export default class ExampleClassComponent extends Component {

  constructor(props) {
    super();
    console.log("PROPS:", props);

    this.state = {
      value1: props.value1,
      value2: 2
    }
  }

  componentDidMount() {
    this.setState({...this.state, value1: "VALUE MOUNTED"});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Prev: ", prevState.value1);
    console.log("Now:", this.state.value1);
  }

  render() {
    return (
      <div>
        <h1>{this.state.value1}</h1>
        <h2>{this.state.value2}</h2>
      </div>
    )
  }
}