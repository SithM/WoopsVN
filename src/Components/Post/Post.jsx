import React from "react";
import Content from './Content';
import HeaderPosst from './HeaderPost';
import Comment from './Comment';
//const { Comment } = Layout;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  render() {

    return (
      <div className='border bg-light mg-1 pd-1'>
        <HeaderPosst />
        <Content />
        <hr className='mgt-1'/>
        <p className='t-center fs-small'>Click to view comment</p>
        <Comment className='mgt-1'/>
      </div>
    );
  }
}

export default Post;
