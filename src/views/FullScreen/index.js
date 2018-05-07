import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';


class FullScreen extends React.Component {
  componentWillMount(){
    // this.onClick()
  }
  componentDidMount(){
    console.log('ssss')

    const P = new Promise((resolve, reject)=>{
                console.log('P.start')
                // self.setState({imgH:height,imgW:847,imgCW:847,imgCH:height})
                resolve();
              })
    P.then(()=>{
      
      console.log(document.getElementById('btn').click())
    })
    // let Promise = new Promise()
  }
  onClick = () => {

    let elem = document.getElementById("btn");
        console.log('elem',elem)
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    else if (elem.webkitRequestFullscreen) {
      console.log('sss222')
      elem.webkitRequestFullscreen();
    }

  }
  render() {
    return (
      <div>
        <Divider >this is FullScreen</Divider>

        <div id='btn' onClick={this.onClick}>click me</div>
      </div>
    );
  }
}
export default FullScreen;
