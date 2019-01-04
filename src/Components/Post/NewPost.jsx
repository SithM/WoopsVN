import React, { Component } from "react";
import { Card, Icon, Button, Input, message } from "antd";
import { createWoopsRequest } from "../../Actions/index";
import { connect } from "react-redux";

const TextArea = Input.TextArea;
const success = () => {
  message.success("Your post has been successfully uploaded!");
};

class NewPost extends Component {
  state = {
    value: "",
    isSuccess: false
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  createPost = () => {
    const idToken = "";
    //console.log(this.state.value);
    let content = {
      content: this.state.value
    };
    this.setState({
      isSuccess: true,
      value: null
    });
    success();
    this.props.onCreateWoop(idToken, content);
  };

  render() {
    let titleCard = (
      <React.Fragment>
        <Icon type="edit" theme="filled" /> Make Post
      </React.Fragment>
    );
    let { value } = this.state;
    return (
      <div className="mg-1 border">
        <Card title={titleCard}>
          <div>
            <TextArea rows={3} onChange={this.handleChange} value={value} />
            <Button
              htmlType="submit"
              type="primary"
              className="mgt-1 float-right"
              onClick={this.createPost}
            >
              Post
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCreateWoop: (idToken, content) => {
      dispatch(createWoopsRequest(idToken, content));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
