import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';

class Home extends React.Component {
  render() {
    console.log('process.env.NODE_ENV',process.env.NODE_ENV)
    return (
      <div>

        <Divider >this iss Hom2e</Divider>
      </div>
    );
  }
}
export default Home;
