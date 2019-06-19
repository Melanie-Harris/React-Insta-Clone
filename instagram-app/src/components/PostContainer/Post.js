import React from 'react';



const Post = props => {
console.log(props.post.imageUrl)
    return (
        <div>
            {/* {props.username}
            {props.thumbnailUrl}
            {props.imageUrl}
            {props.likes}
            {props.timestamp} */}
        
            <img
                alt=""
                className="postImg"
                src={props.post.imageUrl} 
                />
            {/* <Comment /> */}
        </div>
    );
};

export default Post;