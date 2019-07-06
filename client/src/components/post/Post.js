import React from 'react';
import Comment from '../comment/Comment';
import Caption from '../caption/Caption';
import './Post.css';


export function Post(props) {    
    return (
        <div className="postdiv">
            <img id="post-img" alt={props.username.first} src={props.src} />
            <p id="post-username">{props.username.first+props.username.last}</p>
            <Caption id="post-caption" caption={props.caption}></Caption>
            <Comment id="post-comments" numberOfComments={Object.keys(props.comments).length} comments={props.comments}></Comment>
        </div>
    );    
}

