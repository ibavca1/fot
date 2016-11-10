import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Page from '../components/page';
import FotNav from '../components/nav-bar';
import * as userActions from '../actions/userActions';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    let {user, page} = this.props;
    const {userExit, userLogin} = this.props.userActions;
    return <div>
      <FotNav user={user} userExit={userExit} userLogin={userLogin}/>
      <Page page={page} />
    </div>
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}
function mapDispatchToProps(dispatch){
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
