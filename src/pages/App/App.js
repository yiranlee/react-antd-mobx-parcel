import React from "react";
import ReactDOM from "react-dom";

class App2 extends React.PureComponent {
  render() {
    return <div>
    {this.props.id}
    </div>;
  }
}



const Hoc =  (props) => {  
      console.log(props)
      props.id = 5;   
      return <App2 {...props} />     
}


export default Hoc
