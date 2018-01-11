import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';
import App2 from "./App";

import {observer, inject} from 'mobx-react';


@inject('home') @observer
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {str: [{
      ss: 'heelow'
    }]
    };
  }



  render() {
    return <div>
       <Button type="primary" onClick={() => this.props.home.addTimer()}>增加</Button>
       <Button type="primary" onClick={() => this.props.home.cutTimer()}>减少</Button>
       <Button type="primary" onClick={() => this.props.home.resetTimer()}>归0</Button>
       <p>{this.props.home.id}</p>
    </div>;
  }
}


