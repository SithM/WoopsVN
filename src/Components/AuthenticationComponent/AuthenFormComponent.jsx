import React, { Component } from "react";
import { Tabs, Row, Col } from "antd";
import LoginComponent from "./LoginComponent";
import RegisterConponent from "./RegisterConponent";

const TabPane = Tabs.TabPane;

class AuthenFormComponent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const operations = (
      <TabPane tab="Register" key="3">
        Content of Tab Pane 2
      </TabPane>
    );

    return (
      <Tabs defaultActiveKey="1" size="large" tabBarExtraContent={operations}>
        <TabPane tab="Login" key="1">
          <Row type="flex" justify="space-around" align="middle">
            <Col span={18}>
              <LoginComponent />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Register" key="2">
          <Row type="flex" justify="space-around" align="middle">
            <Col span={18}>
              <RegisterConponent />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    );
  }
}

export default AuthenFormComponent;
