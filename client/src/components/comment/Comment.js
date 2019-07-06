import React from "react";
import Popup from "reactjs-popup";
import './Comment.css'


class Comment extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: false, comments: props.comments };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
      this.setState({ open: true });
    }
    closeModal() {
      this.setState({ open: false });
    }
  
    render() {
      return (
        <div className="">
          <a className="com-numbers" onClick={this.openModal}>
            View All {this.props.numberOfComments} Comments
          </a>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div id="comment-box" className="modal">
              <ul id="list">
                  {Object.keys(this.props.comments).map(user => {
                      return <li id="cm">{user}: {this.props.comments[user]}</li>
                  })}
              </ul>
            </div>
          </Popup>
        </div>
      );
    }
  }
  


export default Comment;