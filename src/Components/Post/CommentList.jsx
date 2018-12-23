import React, { Component } from "react";
import { Comment, Icon, Tooltip, Avatar } from "antd";
import moment from "moment";

class CommentList extends Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
    loading: true
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked"
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked"
    });
  };

  

  render() {
    const { likes, dislikes, action } = this.state;
    const authors = ['Monochrome','Alibaba','Han Sama', 'Itachi', 'Naruto', 'Sasuke', 'John Smith' ]
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span>Comment</span>
    ];

    const mAvatar = <Avatar icon="user" alt="Han Solo" />;

    let mContent = <p>Good Idea, Thank you Loadable and React Spinner!</p>;

    let mDate = (
      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
        <span>{moment().fromNow()}</span>
      </Tooltip>
    );

    return (
        this.showAuthor(authors, actions, mAvatar, mContent, mDate)
    );

    
  }

  showAuthor = (authors, actions, mAvatar, mContent, mDate) => {
    let result = null;
    result = authors.map((author, index) => {
        return (
            <Comment
                key={index}
                actions={actions}
                author={author}
                avatar={mAvatar}
                content={mContent}
                datetime={mDate}
            />
        )
            
    })
    return result;
    }

}

export default CommentList;
