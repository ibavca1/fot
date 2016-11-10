import React, {Component} from 'react';
import {connect} from 'react-redux';
import InsertRow from './popup/insertRow';
import {bindActionCreators} from 'redux';
import {
  Button
} from 'react-bootstrap';
import * as popupActions from '../actions/popupActions';

class Page extends Component {
  constructor(props, context) {
    super(props, context)
  }
  handleShow(){
    const {showPopup} = this.props.popupActions;
    showPopup();
  }
  render(){
    const {popups} = this.props;
    const {hidePopup} = this.props.popupActions;
    return <div>
        Page component
        <Button onClick={this.handleShow.bind(this)}>Show</Button>
        <InsertRow showInsertRow={popups.showInsertRow} hidePopup = {hidePopup}/>
      </div>
  }
}
function  mapStateToProps(state){
    return {
      popups: state.popups
    }
  }
function mapDispatchToProps(dispatch){
  return {
    popupActions: bindActionCreators(popupActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);
