import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Welcome from '../../Components/AuthenticationComponent/Welcome'
import AuthenFormComponent from '../../Components/AuthenticationComponent/AuthenFormComponent'

class Authentication extends Component {
    render() {
        return (
            <Row>
                <Col span={15}>
                    <Welcome />
                </Col>
                <Col span={9}>
                    <AuthenFormComponent />
                </Col>
            </Row>
        );
    }
}

export default Authentication;