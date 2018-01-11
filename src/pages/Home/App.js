import React from "react";
import ReactDOM from "react-dom";

class App extends React.PureComponent {


  render() {
    return <div>
    {this.props.id}
    </div>;
  }
}


export default App
