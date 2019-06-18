import React from 'react';



class CommentSection extends React.Component {

    state = {
        comments: this.props.commenting,
        newComment: '',
    }

changeHandler= (event)=>{
    this.setState({
        newComment: event.target.value
    })
}

addComment= (event)=>{
    event.preventDefault()
    this.setState({
        comments: [...this.state.comments,{
            username: 'Melanie is Awesome!!!!!!!!!!!!!',
            text: this.state.newComment
        } ],
        newComment: '',
    })
}

    render() {
        console.log(this.props.commenting)
        return (
            <div>
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
                    <input
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