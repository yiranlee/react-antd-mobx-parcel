import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';
import App2 from "./App";

import {observer, inject} from 'mobx-react';


@inject('app') @observer
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {str: [{
      ss: 'heelow'
    }]
    };
  }

  handleClick = () => {
    const str = this.state.str;
    str.push({
      ss: 'word'
    })
    this.setState({
      str,
    })
  }


  render() {
    return <div>
       <Button type="primary" onClick={() => this.props.app.addTimer()}>ssss</Button>
        <App2 id={this.props.app.timer} />
    </div>;
  }
}


