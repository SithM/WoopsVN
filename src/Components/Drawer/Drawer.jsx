import React from "react";
import { Drawer, Avatar} from "antd";

class DrawerComponent extends React.Component {
  state = { visible: false, placement: "left" };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };


  render() {

    const Avatars = <Avatar size={64} icon="user" onClick={this.showDrawer} />

    return (
      <React.Fragment>
        <Avatar size="large" icon="user" onClick={this.showDrawer} />
        <Drawer
          className='box-space-between'
          title={Avatars}
          placement={"left"}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className='t-center t-bold-7 fs-2x'>Monochrome</p>
          <p>Some contents...</p>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default DrawerComponent;
