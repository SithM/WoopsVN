import React from "react";
import { Avatar, Tooltip, Row, Col, Icon, Modal, message } from "antd";
import moment from "moment";
import { deleteWoopsRequest, editWoopsRequest } from "../../Actions/index";
import { connect } from "react-redux";

const confirm = Modal.confirm;
const successDelete = () => {
  message.success("Delete post successfully!");
};
const successEdit = () => {
  message.success("Edit post successfully!");
};

class HeaderPost extends React.Component {
  state = {
    value: ""
  };

  render() {
    let key = this.props.id;
    let idToken = this.props.id_token;
    let { content } = this.props;

    let showDeleteConfirm = () => {
      confirm({
        title: "Are you sure delete this post?",
        content: null,
        okText: "Delete",
        okType: "danger",
        cancelText: "No",
        onOk() {
          successDelete();
          //this.props.onDeleteWoop(idToken, key);
          console.log("OK");
        }
      });
    };
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
              </Tooltip>
              &nbsp;
              <Tooltip title="Delete post" className="mg-0pd-0">
                <span onClick={showDeleteConfirm}>
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

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteWoop: (idToken, key) => {
      dispatch(deleteWoopsRequest(idToken, key));
    },
    onEditWoop: (idToken, key, content) => {
      dispatch(editWoopsRequest(idToken, key, content));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderPost);
