import React, { Component } from "react";
import { Form, Input, Select, Checkbox, Button, Icon } from "antd";
import { Link } from "react-router-dom";
import { signUpRequest } from "../../Actions";
import { connect } from "react-redux";

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
    // data: {
    //   email: "",
    //   password: "",
    //   phone: ""
    // }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //console.log("Received values of form: ", values.email);
        let dataUser = {
          email: values.email,
          password: values.password,
          phone_number: `+${values.prefix}${values.phone}`
        };
        // this.setState({
        //   data: data
        // });
        this.props.onSignUpAccount(dataUser);
        //console.log(this.state.data);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "84"
    })(
      <Select style={{ width: 70 }}>
        <Option className="f-bold-5" value="84">
          +84
        </Option>
        <Option className="f-bold-5" value="86">
          +86
        </Option>
        <Option className="f-bold-5" value="87">
          +87
        </Option>
        <Option className="f-bold-5" value="88">
          +88
        </Option>
        <Option className="f-bold-5" value="32">
          +32
        </Option>
      </Select>
    );

    return (
      <div className="mgt-1">
        <h1 className="f-bold-7">Create Your Account</h1>

        <Form onSubmit={this.handleSubmit}>
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

          <FormItem hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your Password!"
                },
                {
                  validator: this.validateToNextPassword
                }
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

          <FormItem hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input
                onBlur={this.handleConfirmBlur}
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Confirm Password"
              />
            )}
          </FormItem>

          <FormItem hasFeedback>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "Please input your phone number!"
                }
              ]
            })(
              <Input
                size="large"
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
              />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox>
                I agree to our <Link to="/rules/terms">Terms </Link> and{" "}
                <Link to="/rules/data-policy">Data Policy</Link>.
              </Checkbox>
            )}
            <br />
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="w-100"
            >
              Register
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const RegisterConponent = Form.create()(RegistrationForm);

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSignUpAccount: dataUser => {
      dispatch(signUpRequest(dataUser));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterConponent);
