import React from "react";
import { Input } from "antd";
import {Avatar, Row, Col } from "antd";
import Loadable from "react-loadable";
import BarLoading from "../Loading/BarLoading";
const { TextArea } = Input;

class CommentBlock extends React.Component {
  

  render() {
    

    const LoadCommentList = Loadable({
      loader: () => import('./CommentList'),
      loading: BarLoading,
      timeout: 2000
    });

    return (
      <Row>
        <Col span={23} offset={1}>
          <LoadCommentList />
        </Col>
        <Col span={1}>
          <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
        </Col>
        <Col span={23}>
          <TextArea
            className="mgt-1"
            rows={1}
            placeholder="Write a comment..."
          />
        </Col>
      </Row>
    );
  }
}

export default CommentBlock;
