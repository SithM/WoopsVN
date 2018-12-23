import React, { Component } from "react";
import { Card, Icon, Button, Input } from "antd";

const TextArea = Input.TextArea;

class NewPost extends Component {
  render() {
    let titleCard = (
      <React.Fragment>
        <Icon type="edit" theme="filled" /> Make Post
      </React.Fragment>
    );
    return (
      <div className="mg-1 border">
        <Card title={titleCard}>
          <div>
              <TextArea rows={3} />
              <Button htmlType="submit" type="primary" className='mgt-1 float-right'>
                Post
              </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default NewPost;
