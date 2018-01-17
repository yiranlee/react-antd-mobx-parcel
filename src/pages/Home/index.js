import React from 'react';
import { Button, Layout, Menu, Breadcrumb, Table } from 'antd';
import { observer, inject } from 'mobx-react';


const { Header, Content, Footer } = Layout;


@inject('home')
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: 'website',
      dataIndex: 'website',
      key: 'website',
    }];

    console.log(this.props.home.list)

    return (
      <div>
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
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Button type="primary" onClick={() => this.props.home.getlist()}>获取列表</Button>
              <Table columns={columns} dataSource={this.props.home.list} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </div>);
  }
}

