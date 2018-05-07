import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, editMenber } from '../../actions/login.js';
import './index.css';
import styles from './index.less';
import { Button , Layout, Menu, Breadcrumb, Icon, Table, Dropdown, Select } from 'antd';

const { SubMenu } = Menu;
const Option = Select.Option;
const { Header, Content, Footer, Sider } = Layout;
class Login extends Component {
  constructor () {
    super()
    // this.state = {
    //     activeKey: '0',
    //         user: {},
    //         menu: [],
    //         popVisible: false,
    //         status:'0'
    // }
  }
  componentWillMount () {
    console.log(this.props)
   
  }
  onClick=()=>{
    console.log(this.props)
    this.props.login()
  }
  editMenber=()=>{
    this.props.editMenber({info:{name:'lisi',age:12}})
  }
  editBank=()=>{

  }
  editSFZ=()=>{

  }
  render() {
    // console.log('match',match)
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">版本</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">删除</a>
        </Menu.Item>
      </Menu>
    );
    const columns = [
      { 
        title: '姓名', 
        dataIndex: 'name', 
        width: 120,
        key: 'name' 
      },{
        title: '组织架构', 
        dataIndex: 'org', 
        width: 200,
        key: 'org' 
      },{
        title: '性别', 
        dataIndex: 'sex', 
        width: 80,
        key: 'sex' 
      },{
        title: '手机号', 
        dataIndex: 'phone', 
        width: 120,
        key: 'phone' 
      },{
        title: '邮箱', 
        dataIndex: 'Email', 
        width: 200,
        key: 'Email' 
      },{
        title: '籍贯', 
        dataIndex: 'jiguan', 
        width: 200,
        key: 'jiguan' 
      },{
        title: '彩之云账号', 
        dataIndex: 'colour', 
        width: 120,
        key: 'colour' 
      },{
        title: '彩管家账号', 
        dataIndex: 'colourManger', 
        width: 120,
        key: 'colourManger' 
      },{
        title: '渠道', 
        dataIndex: 'qudao', 
        width: 120,
        key: 'qudao' 
      },{
        title: '创建时间', 
        dataIndex: 'creatTime', 
        width: 120,
        key: 'creatTime' 
      },{
        title: '状态', 
        dataIndex: 'status', 
        width: 80,
        key: 'status' 
      },{
        title:'action',
        key: 'action',
        fixed: 'right',
        width: 300,
        render: (text, record) => (
          <span className='right-table-action'>
              <a onClick={this.editMenber.bind(this, record)}>修改</a>
              <span className="ant-divider" />
              <a onClick={this.editBank.bind(this, record)}>银行卡</a>
              <span className="ant-divider" />
              <a onClick={this.editSFZ.bind(this, record)}>证件</a>
              <span className="ant-divider" />
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  更多 <Icon type="down" />
                </a>
              </Dropdown>
          </span>
      ),
      }
    ];
    
    const data = [
      {
        name:'zhangsan',
        key:'id1234',
        org:'彩生活服务集团',
        phone:'1348598392',
        sex:'男',
        Email:'330192840@qq.com',
        jiguan:'福建厦门',
        colour:'CZYadmin',
        colourManger:'CGJadmin',
        qudao:'彩管家',
        status:'正常',
        creatTime:'2018.1.16'

      }
    ]
    return  (
      <div id='login'>
        <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">员工列表</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          
        <Table 
          columns={columns}
          dataSource={data}
          scroll={{x:1700}}
        />
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      新人员服务
    </Footer>
  </Layout>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loading: state.login.loading
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    editMenber:bindActionCreators(editMenber, dispatch),
  };
}
// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//页面使用connect是有前提的，需要配置好redux，主要内容在Store
