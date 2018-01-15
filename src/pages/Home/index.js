import React from "react";
import ReactDOM from "react-dom";
import { Button, Layout, Menu, Breadcrumb} from 'antd';
// import App2 from "./App";

const { Header, Content, Footer } = Layout;

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
       <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
  <Button type="primary" onClick={() => this.props.home.addTimer()}>增加</Button>
       <Button type="primary" onClick={() => this.props.home.cutTimer()}>减少</Button>
       <Button type="primary" onClick={() => this.props.home.resetTimer()}>归0</Button>
       <p>{this.props.home.id}</p>
    </div>;
  }
}


