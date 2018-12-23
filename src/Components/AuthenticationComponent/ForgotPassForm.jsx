import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";
import ReCAPTCHA from "react-google-recaptcha";

const FormItem = Form.Item;
const recaptchaRef = React.createRef();

class ForgotForm extends Component {
  state = { isHuman: false };

  onCheckCapcha = () => {
    this.setState({
      isHuman: true
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem hasFeedback>
          {getFieldDecorator("userName", {
            rules: [
              {
                required: true,
                message: "Please input your username!",
                validateStatus: "error"
              }
            ]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              id="error"
            />
          )}
        </FormItem>

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
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="email"
              placeholder="Email"
            />
          )}
        </FormItem>

        <FormItem>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="normal"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={this.onCheckCapcha}
          />
        </FormItem>

        <Button
          disabled={!this.state.isHuman}
          size="large"
          type="primary"
          htmlType="submit"
          className="w-100 mg-0"
        >
          Get a new Password
        </Button>
      </Form>
    );
  }
}

const ForgotPassForm = Form.create()(ForgotForm);

export default ForgotPassForm;
