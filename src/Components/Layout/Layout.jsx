/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Layout, Row, Col} from "antd";
import DrawerComponent from "../Drawer/Drawer";
import Post from "../Post/Post.jsx";
import NewPost from "../Post/NewPost";
import FriendBlock from "../FriendComponent/FriendBlock";
//import 'bootstrap/dist/css/bootstrap.css';

const { Header, Content } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="pd-0 pdl-1 fixed">
          {/* <Avatar size="large" icon="user" />  */}
          <span className=" mgr-2">
            <DrawerComponent />
          </span>
        </Header>
        <Layout style={{ marginTop: 64 }}>
          <Content>
            <Row>
              <Col span={18}>
                <NewPost />
                <Post />
              </Col>

              <Col span={6} className="border mgt-1">
                <FriendBlock />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
