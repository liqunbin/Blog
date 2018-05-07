import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon,Button } from 'antd';


class Notfined extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content:'这是空的',
        isFind:false
    }
  }
  componentWillMount() {
      
    console.log('start',document.getElementById('text'))
    let P = new Promise((resolve, reject)=>{
      console.log('new success22')
      // return ('hello wordl')
      console.log('start2',document.getElementById('text'))
      resolve('8888');
      reject('333hello');
    })

    P.then((value)=>{
      console.log('222',value,'obj',document.getElementById('text'));
      
      this.setState({content:value})
      this.clickPromise1()
    },(err) => {
      console.log('it is error',err)
    })
  }

  componentDidMount(){
    this.setState({isFind:true})

    console.log('docu',document.getElementById("text"))
    // this.clickPromise()
  }
  clickPromise = ()=>{
    console.log('run')
    let P = new Promise((resolve, reject)=>{
      console.log('new success')
      // return ('hello wordl')
      resolve('8888');
      reject('333hello');
    })

    P.then((value)=>{
      console.log('222',value,'obj',document.getElementById('text'));
      
      this.setState({content:value})
    },(err) => {
      console.log('it is error',err)
    })
  }
  clickPromise1 = () =>{
    const self =this ;
    const p1 = new Promise(function (resolve, reject) {
      // setTimeout(() => reject(new Error('fail')), 3000)
      resolve(
        self.state.content
      )
    })
    
    const p2 = new Promise(function (resolve, reject) {
      setTimeout(() => resolve(p1), 1000)
    })
    
    p2
      .then(result => console.log(result))
      .catch(error => console.log('after',error))
  }

  render() {
    console.log('www')
    const { content } = this.state;
    return (
      <div>

        <Divider >this is Notfined</Divider>

        <a href="javascript:new Date().toLocaleTimeString();">Click me</a>
        {this.state.isFind ? (<Divider id="text" orientation="right">this is PromiseClick</Divider>) : null}
        

        <Button onClick={this.clickPromise}>点击执行</Button>
        <div>{content}</div>
      </div>
    );
  }
}
export default Notfined;
