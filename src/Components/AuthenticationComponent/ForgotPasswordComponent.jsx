import React, { Component } from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import ForgotPassForm from "./ForgotPassForm";

class ForgotPasswordComponent extends Component {
  state = { visible: false };

  showModal = e => {
    e.preventDefault();
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    let ModalTitle = (
      <h3 className="mg-0 f-bold-7">Enter Username and Email</h3>
    );

    return (
      <React.Fragment>
        <Link
          className="login-form-forgot float-right"
          onClick={this.showModal}
          to="/"
        >
          Forgot password
        </Link>
        <Modal
          title={ModalTitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          footer={null}
        >
          {/* <h1 className="f-bold-7">Create Your Account</h1> */}
          <ForgotPassForm />
        </Modal>
      </React.Fragment>
    );
  }
}

export default ForgotPasswordComponent;
