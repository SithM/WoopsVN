import React, { Component } from "react";
import { Card, Avatar, Icon, Switch, Input, message } from "antd";
import { Link } from "react-router-dom";

const success = () => {
  message.success('You are Online.');
};
const warning = () => {
  message.warning('You are offline.');
};

class FriendBlock extends Component {
  state = {
    loading: true,
    displayInput : false
  };

  onChange = (checked, loading) => {
    this.setState({ 
      loading: !checked 
    });
  };

  DisplayInput = () => {
    this.setState({
      displayInput : !this.state.displayInput
    });
  }


  render() {
    const { loading, displayInput } = this.state;
    let bottom = displayInput ? 48 : 0
    let mes = loading ? success : warning;
    let titleCard = (
      <Link to="/friend">
        <Icon type="message" theme="filled" /> Friends List
      </Link>
    );

    let actionCard = [
      <Icon type="setting" />,
      <Icon type="edit" />,
      <Icon type="search" onClick={this.DisplayInput} />
    ];

    return (
      <Card
        extra={
          <Switch size="small" checked={!loading} onChange={this.onChange} onClick={mes}/>
        }
        title={titleCard}
        actions={actionCard}
        className="chat-box"
      >
        <span className="box-space-between ">
          <span>
            <Avatar icon="user" />
            <span className="mgl-1 f-bold-7 fs-2x">Monochrome </span>
          </span>

          <span>
            <Icon type="border" className="is-on" />
          </span>
        </span>
        <span className="box-space-between mgt-1">
          <span>
            <Avatar icon="user" />
            <span className="mgl-1 f-bold-7 fs-2x">Monochrome </span>
          </span>

          <span>
            <Icon type="border" className="is-off" />
          </span>
        </span>
        <span className="box-space-between mgt-1">
          <span>
            <Avatar icon="user" />
            <span className="mgl-1 f-bold-7 fs-2x">Monochrome </span>
          </span>

          <span>
            <Icon type="border" className="is-off" />
          </span>
        </span>
        <div className="search-box-friends">
          <Input size="large" placeholder="Search a friend..." style={{bottom: bottom}}/>
        </div>
      </Card>
    );
  }
}

export default FriendBlock;
