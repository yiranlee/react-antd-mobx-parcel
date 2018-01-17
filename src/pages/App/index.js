import React from 'react';
import { Button } from 'antd';
import { observer, inject } from 'mobx-react';
import Hoc from './App';

@inject('app') @observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: [{
        ss: 'heelow',
      }],
    };
  }

  handleClick = () => {
    const str = this.state.str;
    str.push({
      ss: 'word',
    });
    this.setState({
      str,
    });
  }


  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.props.app.addTimer()}>ssss</Button>
        {/* <App2 id={this.props.app.timer} /> */}
        {Hoc({ id: this.props.app.timer })}
      </div>);
  }
}

