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
    let P = new Promise((resolve, reject)=>{
        console.log('new success')
        console.log('promiseNew',document.getElementById('text'));
        resolve('8888');
      })
  
      .then((value)=>{
        console.log('then','obj',document.getElementById('text'));
        this.promiseClick();
      })
      .catch((error)=>{console.log(' is err',error)})
    }
    componentDidMount(){
      this.setState({isFind:true})
      console.log('DidMount',document.getElementById("text"))
    }
  
    promiseClick = () => {
      console.log("start");
      new Promise((resolve, reject) => {
          var data = [1,2,3,4,5,6,7];
          return resolve(data);
      })
      .then((result) => {
          var newResult = result.slice(1);   
          return newResult;
      })
      .then((result)=>{
          console.log(result);
          throw new Error('someting error');
      })
      .catch((value)=>{
          
          console.log(value);// 抛出错误之后 执行catch操作 接受的参数是抛出的错误，其实.catch只是Promise.then(reject)的别名而已
          return "2222";
        })
      .then((value) => {
          console.log(value);// undefined 抛出错误后没有 return 所以这里是个undefined
          console.log('我任性，错了之后仍要执行');// catch之后仍然可以继续执行then操作 
      });
    }

  render() {
    return (
      <div>

        {this.state.isFind ? (<Divider id="text">this is PromiseClick</Divider>) : null}

      </div>
    );
  }
}
export default Notfined;
