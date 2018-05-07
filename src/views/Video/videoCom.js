import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';
import Flv from 'flv.js';




class VideoCom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isChange:true
    }
  }
  componentWillMount(){
    console.log(this.props.obj)
  }
  componentWillReceiveProps(nextProps,nextState){
    console.log('nextProps',nextProps,'nextState',nextState)
      if(this.props.obj!==nextProps.obj){
        console.log('newx')
        this.setState({isChange:false})
      }
      if(this.state.isChange!==nextState.isChange && !nextState.isChange){
        this.componentDidMount()
        this.setState({isChange:true})
      }
    }
  componentDidMount(){
    console.log(this.props.obj)
    const obj = this.props.obj;
    if (Flv.isSupported()) {
      console.log('start')
        var videoElement = document.getElementById(obj.id);
        var flvPlayer = Flv.createPlayer({
            type: 'flv',
            url: obj.url
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
        console.log('end')
    }
  }

  render() {

    return (
      <div style={{float:'left'}}>

        {this.state.isChange ? (<video id={this.props.obj.id} style={{width:500,height:500}}></video>) : null}

        {/*<source src="rtmp://112.74.168.10:1935/live/livestream2" type="rtmp/flv" /><Divider >this is Video</Divider>*/}


      </div>
    );
  }
}
export default VideoCom;
