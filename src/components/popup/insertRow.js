import React, {Component} from 'react';
import {
  Modal,
  Button
} from 'react-bootstrap';
//import {user} from '../../models/userRegister';
class InsertRow extends Component {
  constructor(props) {
    super(props);
  }
  handleSave(data){
    console.log(data);
    //TODO Сохранить и выйти
    this.props.hidePopup();
  }
  handleClose(){
    this.props.hidePopup();
  }
  render(){
    console.log(this.props);
    return <div className='static-modal'>
      <Modal show = {this.props.showInsertRow}>
        <Modal.Header>
          <Modal.Title>Добавить задание.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Тут отобразить модель данных
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleClose.bind(this)}>
            Закрыть
          </Button>
          <Button bsStyle='primary'
                  onClick={this.handleSave.bind(this)}>
            Сохранить
          </Button>
        </Modal.Footer>

      </Modal>
    </div>

  }
}
export default InsertRow;
