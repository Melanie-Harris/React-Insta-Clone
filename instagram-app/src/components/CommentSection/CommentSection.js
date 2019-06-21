import React from 'react';



class CommentSection extends React.Component {

    state = {
        comments: this.props.commenting,
        newComment: '',
    }

    changeHandler = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }

    addComment = (event) => {
        event.preventDefault()
        this.setState({
            comments: [...this.state.comments, {
                username: 'Melanie',
                text: this.state.newComment
            }],
            newComment: '',
        })
    }

    render() {
        console.log(this.props.commenting)
        return (
            <div>
                <div className="instaButtons">
                    <img src="https://img.icons8.com/ios/50/000000/topic.png"></img>
                    <img className= "heart" src="https://img.icons8.com/ios/50/000000/like.png"></img>
                    
                </div>
                <br />
                <div className="likes">300 Likes</div>
                <br />

                {this.state.comments.map(comment => (
                    <>
                        <div >
                            {comment.thumbnailUrl}
                            <span className="boldText">{comment.username}</span>
                            <span> </span>
                            {comment.text}
                            <p />
                        </div>
                    </>
                ))}

                <h6 className="timeStamp">Test: 2 hours ago</h6>
                <form onSubmit={this.addComment}>
                    <input className="commentInput"
                        type="text"
                        name="newComment"
                        placeholder="Add a comment..."
                        value={this.state.newComment}
                        onChange={this.changeHandler}
                    />
                </form>
            </div>
        )
    }
}


export default CommentSection;