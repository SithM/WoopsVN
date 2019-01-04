import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Select } from "antd";
import ForgotPasswordComponent from "./ForgotPasswordComponent";
import "./custom-style.scss";
import { signInRequest } from "../../Actions/index";
import { connect } from "react-redux";

//define Tag antd
const FormItem = Form.Item;
const Option = Select.Option;

//api key

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let data = {
          email: values.email,
          password: values.password
        };
        //action
        this.props.onSignInAccount(data);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="mgt-1">
        <h1 className="f-bold-7">Log in to WoopsVN</h1>

        <Form onSubmit={this.handleSubmit} className="login-form mgt-1">
          <FormItem hasFeedback>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="email"
                placeholder="Email"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>

          <FormItem>
            <Select defaultValue="online" size="large">
              <Option value="online">
                {" "}
                <Icon type="border" className="is-on" />{" "}
                <span style={{ marginLeft: 2 }}>Sig in as online</span>{" "}
              </Option>
              <Option value="offline">
                {" "}
                <Icon type="border" className="is-off" />{" "}
                <span style={{ marginLeft: 2 }}>Sig in as offline</span>{" "}
              </Option>
              <Option value="busy">
                {" "}
                <Icon type="border" className="is-busy" />{" "}
                <span style={{ marginLeft: 2 }}>Sig in as busy</span>{" "}
              </Option>
            </Select>
          </FormItem>
          <FormItem>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <ForgotPasswordComponent />
            <br />
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
            >
              Log in
            </Button>
            <div className="w-100 t-center f-bold-7">or</div>

            <div
              className="g-signin2 custom-gapi-btn"
              data-onsuccess="onSignIn"
              data-longtitle="true"
            />
          </FormItem>
        </Form>
      </div>
    );
  }
}

const LoginComponent = Form.create()(NormalLoginForm);

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSignInAccount: dataUser => {
      dispatch(signInRequest(dataUser));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
