import React from 'react';
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props)=>{
    console.log(props)
        return(
            <>
                {props.dummy.map((post) => (
                    <div className="Card">
                        <header className="logoName">
                            <img className="logo" src={post.thumbnailUrl} alt="thumbnail" />
                            <h3>{post.username}</h3>
                        </header>
                    <Post post={post} />
                    <CommentSection commenting={post.comments}/>
                    <br />
                    <br />
                    </div>
                    
                ))}
               
            </>
           
        )
}


export default PostContainer;