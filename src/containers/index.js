import React, {Component, PropTypes} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux'
import Home from './Home';

class AppIndex extends Component {

    constructor(props) {

        super(props);

    }

    render() {
      console.log('AppIndex')
        return (
            <Router>
              <Switch>
                <Route path='/' component={Home}/>
              </Switch>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        // notification: state.globalState.msg,
        // isFetching: state.globalState.isFetching,
        // userInfo: state.globalState.userInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // clear_msg: bindActionCreators(clear_msg, dispatch),
        // user_auth: bindActionCreators(user_auth, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppIndex)
