import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home';
import Login from './views/Login';
import NotFind from './views/Notfined';
import FullScreen from './views/FullScreen';
import Video from './views/Video';
import Video2 from './views/Video2';
import createHistory from 'history/createBrowserHistory';
import './assets/baseCss.css';
import store from './store/index';
import 'ant-design-pro/dist/ant-design-pro.css'; // ant pro的统一引入样式
import { ConnectedRouter } from 'react-router-redux';

const history = createHistory();
ReactDOM.render(
<Provider store={store}>
<Router>
  <Switch>
        <Route exact path='/' component={Login} />{/*exact 匹配完全相等的路径*/}
        <Route path='/home' component={Home} />
        <Route path='/fullScreen' component={FullScreen} />
        <Route path='/video' component={Video} />
        <Route path='/video2' component={Video2} />
        <Route path='/notFined' component={NotFind} />
  </Switch>
</Router>
  </Provider>,document.getElementById('root'));
