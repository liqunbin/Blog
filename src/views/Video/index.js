import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider, Icon, Button } from 'antd';
// import Flv from 'flv.js';
import VideoCom from './videoCom';


class FullScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      flvList: [
        {
          url:'http://192.168.50.18:8000/live/axld5.flv ',
          id:1,
          key:1,
        },
        {
          url:'http://192.168.50.18:8000/live/axld7.flv ',
          id:3,
          key:3
        },

      ],
      flvList2:[
        {
          url:'http://192.168.50.18:8000/live/axld7.flv ',
          id:1,
          key:1,
        },
        {
          url:'http://192.168.50.18:8000/live/axld5.flv ',
          id:3,
          key:3
        },

      ],
      isChange:true
    }
  }


  componentWillMount(){
  }

  componentDidMount(){

  }
  onChange = () => {
    console.log('2222')
    this.setState({isChange:!this.state.isChange})
  }
  render() {
    console.log(this.state.flvList,this.state.isChange)
    return (
      <div>
        <Divider >this is Video</Divider>
      {  this.state.isChange ? (this.state.flvList.map(item => {
          return <VideoCom obj={item} />
        })):(
          this.state.flvList2.map(item => {
            console.log('item',item)
            return <VideoCom obj={item} />
          })
        )
      }
        {/*<source src="rtmp://112.74.168.10:1935/live/livestream2" type="rtmp/flv" />*/}
      <Button onClick={this.onChange}>调换</Button>
      </div>
    );
  }
}
export default FullScreen;
