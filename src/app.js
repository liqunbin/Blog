import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {AppContainer} from 'react-hot-loader';///hot ,热加载模块需要引入
import createHistory from 'history/createBrowserHistory';

import './assets/baseCss.css';//基础样式
import store from './store/index';
import 'ant-design-pro/dist/ant-design-pro.css'; // ant pro的统一引入样式
import AppIndex from './containers';
const history = createHistory();
ReactDOM.render(
<AppContainer>
<Provider store={store}>
  <AppIndex />
</Provider>
</AppContainer>,document.getElementById('root'));
