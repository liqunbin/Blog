import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';//中间件
import promiseMiddleware from './MiddleWare/promiseMiddleware';//中间件元素
import { createLogger } from 'redux-logger';//控制台打印内容，也属于中间件
import afterApiMiddleware from './Middleware/afterApiMiddleware';//中间件元素
// import { browserHistory } from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
})
//使用redux的combineReducers方法将所有reducer打包起来, 配置后在控制台可看到每次action调用的请求状态
import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(
  // `thunk` 中间件由 `Redux` 提供。作用是使action创建函数可以返回一个function代替一个action对象
  thunkMiddleware,
  afterApiMiddleware,
  // `applyMiddleware` 来自 `Redux` 可以包装 `Store` 的 `dispatch`, 将 `promise`
  // promiseMiddleware({ promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'] }),

  // 在控制台里能看到 redux-logger 中间件输出的 action 日志，它们清晰地反映了业务逻辑是怎样的 。如果有其他人在编辑 todolist，基于 websocket 服务端推送技术的支持，你也可以直接看到别人的操作过程。
  loggerMiddleware,

//   routerMiddleware(browserHistory)
)(createStore);

const store = createStoreWithMiddleware(reducer)

export default store;


//页面使用con