import React from "react";
import { Avatar, Tooltip, Row, Col, Icon } from "antd";
import moment from "moment";

class HeaderPost extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={1}>
            <Avatar size="large" icon="user" />
          </Col>
          <Col span={19}>
            <h4 className="fs-2x f-bold-7 mg-0 pd-0 mgl-1">Monochrome</h4>
            <Tooltip
              title={moment().format("YYYY-MM-DD HH:mm:ss")}
              className="mg-0 pd-0 fs-small mgl-1"
            >
              <span>
                <Icon type="clock-circle" /> {moment().fromNow()}
              </span>
            </Tooltip>
          </Col>
          <Col span={4}>
            <span className="float-right">
              <Tooltip title="Edit post" className="mg-0 pd-0">
                <span>
                  <Icon type="edit" />
                </span>
              </Tooltip>&nbsp;
              <Tooltip title="Delete post" className="mg-0pd-0">
                <span>
                  <Icon type="close" />
                </span>
              </Tooltip>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HeaderPost;
